import { BPEntitiesTemplateDef, BPEntitiesTemplateOverride, BPEntityComponent, BPEntityComponentsMap, BPEntityDefaultEventsNames, BPEntityEventsMap, BPEntityGroupCompsList, GroupNames, LooseEvents, LoseDefinition, LoseOver } from "../../types/behaviors/EntitiesTemplate";
import { BehaviorEntityBuilder } from "./EntityBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de entidades y su edicion post-edicion.
 * @class FinalEntityBuilderTemplate
 * @extends {BehaviorEntityBuilder}
 * @author HaJuegos - 30-09-2026
 */
export class FinalEntityBuilderTemplate extends BehaviorEntityBuilder {
    /**
     * Argumentos principales para la creacion de una entidad a base de una plantilla en concreto.
     * @param {LoseDefinition} def Los valores definidos de la entidad en la plantilla.
     * @param {LoseOver} over Los valores a cambiar de la entidad en la plantilla post-edicion.
     * @author HaJuegos - 30-09-2026
     * @constructor
     */
    constructor (def: LoseDefinition, over: LoseOver) {
        super(def.id);

        const where = `[${def.id}]`;

        if (def.formatVersion) {
            this.setDefaultVersion(def.formatVersion);
        }

        this.setDefaultDescParams({ ...def.description, ...over.description });

        const anims = { ...def.animations, ...over.animations };

        if (Object.keys(anims).length) {
            this.setDefaultAnimationScripts(anims);
        }

        const proper = { ...def.properties, ...over.properties };

        if (Object.keys(proper).length) {
            this.setDefaultProperties(proper);
        }

        const comps = this.patchMap(this.byID(def.components, `${where} components`), over.components, `${where} components`);

        this.addUnique(comps, over.add?.components, `${where} add.components`, "components");

        const compsGroups: Record<string, BPEntityComponentsMap> = {};

        for (const id of Object.keys(over.componentsGroups ?? {})) {
            if (!(id in def.componentsGroups)) {
                throw new Error(`${where} componentsGroups: el grupo "${id}" no existe en la plantilla base. Usa add.componentsGroups para crearlo y añadirlo a la plantilla base.`);
            }
        }

        for (const [id, list] of Object.entries(def.componentsGroups)) {
            const groupOverride = over.componentsGroups?.[id];

            if (groupOverride === null) {
                continue;
            }

            const path = `${where} componentsGroups."${id}"`;

            compsGroups[id] = this.patchMap(this.byID(list, path), groupOverride, path);
        }

        for (const [id, list] of Object.entries(over.add?.componentsGroups ?? {})) {
            compsGroups[id] ??= {};

            this.addUnique(compsGroups[id], list, `${where} add.componentsGroups."${id}"`, `componentsGroups."${id}"`);
        }

        const events = this.patchMap(def.events, over.events, `${where} events`, BPEntityDefaultEventsNames) as LooseEvents;

        for (const [name, event] of Object.entries(over.add?.events ?? {})) {
            if (name in events) {
                throw new Error(`${where} add.events: el evento "${name}" ya existe en la plantilla base. Usa events para reemplazarlo de la plantilla base.`);
            }

            events[name] = event;
        }

        this.validateEvents(events, Object.keys(compsGroups), where);

        this.setDefaultComponents(Object.values(comps));
        this.setDefaultComponentGroups(Object.fromEntries(Object.entries(compsGroups).map(([id, g]) => [id, Object.values(g)])));
        this.setDefaultEvents(events);
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 30-09-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }

    /**
     * Metodo auxiliar que aplica mutaciones sobre una copia superficial de un mapa base a partir de un parche de valores. Entonces si un valor en el parametro patch es null, se elimina dicha propiedad.
     * @template V Tipo de valores genericos en el mapa base.
     * @param {Record<string, V>} base Mapa original de datos sobre el que se genera la copia
     * @param {(Record<string, unknown> | undefined)} patch Mapa con los cambios o modificaciones a aplicar.
     * @param {string} where Contexto u origen de la llamada para identificar la procedencia en mensajes de error.
     * @param {readonly string[]} [extraKeys] (Opcional) Claves adiccionales admitidas que no requieren previa existencia en el parametro base. 
     * @returns {Record<string, V>} Devuelve la nueva estructura resultante con los cambios aplicados.
     * 
     * @throws {Error} Mandara error, Si una clave del parametro Path no paretenece al parametro Base ni al parametro ExtraKey.
     * @throws {Error} Mandara error, Si el ID de un componente esta presente en el parametro de valor y difiere del parametro del parche.
     * 
     * @author HaJuegos - 30-09-2026 
     * @private
     */
    private patchMap<V>(base: Record<string, V>, patch: Record<string, unknown> | undefined, where: string, extraKeys: readonly string[] = []): Record<string, V> {
        const out: Record<string, V> = { ...base };

        for (const [key, value] of Object.entries(patch ?? {})) {
            if (!(key in base) && !extraKeys.includes(key)) {
                throw new Error(`${where}: "${key}" no existe en la plantilla para modificarlo. Usa add para agregarlo a la plantilla base.`);
            }

            if (value == null) {
                delete out[key];
            } else if (value != undefined) {
                const idComp = (value as { idComp?: string; }).idComp;

                if (idComp != undefined && idComp != key) {
                    throw new Error(`${where}: "${key}" recibio un componente no validop para "${idComp}".`);
                }

                out[key] = value as V;
            }
        }

        return out;
    }

    /**
     * Metodo auxiliar que convierte un listado de componentes en un diccionario indexado por el ID del componente.
     * @param {readonly BPEntityComponent[]} [list] Lista de componentes a indexar. 
     * @param {string} where Contexto u origen de la ejecucion para los mensajes de error.
     * @returns {BPEntityComponentsMap} Devuelve el objecto mapeado con los componentes indexados por clave.
     * @throws {Error} Habra error si, existen mas de un componente en la lista con el mismo ID.
     * @author HaJuegos - 30-09-2026 
     * @private
     */
    private byID(list: readonly BPEntityComponent[] = [], where: string): BPEntityComponentsMap {
        const out: BPEntityComponentsMap = {};

        for (const comp of list) {
            if (comp.idComp in out) {
                throw new Error(`${where}: componente duplicado "${comp.idComp}".`);
            }

            out[comp.idComp] = comp;
        }

        return out;
    }

    /**
     * Metodo auxiliar que agrega componentes a una lista de mapas objectivo garantizando que no existan previamente.
     * @param {BPEntityComponentsMap} target Mapa destino donde se insertaran los nuevos componentes.
     * @param {(readonly BPEntityComponent[] | undefined)} list Lista de componentes a incorporar. 
     * @param {string} where Contexto u origen de la ejecucion para mensajes de error.
     * @param {string} replaceWith Sugerencia del metodo o alternativa recomendada cuando ya existe la clave.
     * @returns {void}
     * 
     * @throws {Error} Marcara error si, algun componente de la lista colisiona con una clave existente en el parametro target.
     * @throws {Error} Marcara error si, la lista contiene componente duplicados entre si.
     * 
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private addUnique(target: BPEntityComponentsMap, list: readonly BPEntityComponent[] | undefined, where: string, replaceWith: string): void {
        for (const [id, comp] of Object.entries(this.byID(list, where))) {
            if (id in target) {
                throw new Error(`${where}: "${id}" ya existe. Usa ${replaceWith} para reemplazarlo.`);
            }

            target[id] = comp;
        }
    }

    /**
     * Metodo auxiliar que examina de manera recursiva la estructura de eventos a verificar de los grupos de componentes existan y que no tengan duplicados.
     * @param {LooseEvents} events Estructura o mapa de eventos a analizar.
     * @param {string[]} groups Lista de nombres de grupos declarados.
     * @param {string} where Contexto u origen de la ejecucion para mensajes de error.
     * @returns {void}
     * 
     * @throws {Error} Marcara error, si se hace referencia a un grupo de componente no valido o definido.
     * @throws {Error} Marcara error, si una lista de componentes dentro del evento contiene un nombre repetido.
     * 
     * @author HaJuegos - 01-10-2026
     * @private
     */
    private validateEvents(events: LooseEvents, groups: string[], where: string): void {
        const walk = (node: unknown, event: string): void => {
            if (Array.isArray(node)) {
                node.forEach(item => walk(item, event));

                return;
            }

            if (node == null || typeof node != "object") {
                return;
            }

            for (const [key, value] of Object.entries(node)) {
                const names = (value as { componentGroups?: unknown; } | null)?.componentGroups;

                if ((key == "add" || key == "remove") && Array.isArray(names)) {
                    names.forEach((name: string, i) => {
                        if (!groups.includes(name)) {
                            throw new Error(`${where} events."${event}".${key}: el grupo "${name}" no existe. Disponibles: ${groups.join(", ") || "(ninguno)"}.`);
                        }

                        if (names.indexOf(name) != i) {
                            throw new Error(`${where} events."${event}".${key}: grupo repetido "${name}".`);
                        }
                    });
                } else {
                    walk(value, event);
                }
            }
        };

        for (const [name, event] of Object.entries(events)) {
            walk(event, name);
        }
    }
}

/**
 * Funcion principal de fabrica para la creacion de una entidad custom o vanilla a partir de una definicion fija.
 * @template {readonly BPEntityComponent[]} Comps Lista de componentes base de la entidad en la plantila fija.
 * @template {BPEntityGroupCompsList} CG Mapa de grupos de componentes definidos en la plantilla fija.
 * @template {BPEntityEventsMap<GroupNames<CG>>} Ev Mapa de eventos validados contra los nombres de grupos disponibles.
 * @param {BPEntitiesTemplateDef<Comps, CG, Ev>} def Definicion base de los componentes, grupos y eventos de la plantilla fija de la entidad.
 * @returns {<const AC extends readonly BPEntityComponent[] = [], const AG extends BPEntityGroupCompsList = {}>(over?: BPEntitiesTemplateOverride<...} Retorna una funcion para generar la plantilla final con modificaciones adiccionales despues de haber hecho la edicion base.
 * @author HaJuegos - 01-10-2026
 * @export
 */
export function createBPEntityTemplate<const Comps extends readonly BPEntityComponent[], const CG extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap<GroupNames<CG>>>(def: BPEntitiesTemplateDef<Comps, CG, Ev>) {
    return <const AC extends readonly BPEntityComponent[] = [], const AG extends BPEntityGroupCompsList = {}>(over: BPEntitiesTemplateOverride<Comps, CG, Ev, AC, AG> = {}): FinalEntityBuilderTemplate => {
        return new FinalEntityBuilderTemplate(def as unknown as LoseDefinition, over as unknown as LoseOver);
    };
}