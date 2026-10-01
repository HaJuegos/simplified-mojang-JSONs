import { BPEntityEvents } from "../../types/behaviors/EntitiesEnums";
import { BPEntitiesTemplateDef, BPEntitiesTemplateOverride, BPEntityComponent, BPEntityComponentsMap, BPEntityEventsMap, BPEntityGroupCompsList } from "../../types/behaviors/EntitiesTemplate";
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
     * @param {BPEntitiesTemplateDef<any, any, any>} def Los valores definidos de la entidad en la plantilla.
     * @param {BPEntitiesTemplateOverride<any, any, any>} over Los valores a cambiar de la entidad en la plantilla post-edicion.
     * @author HaJuegos - 30-09-2026
     * @constructor
     */
    constructor (def: BPEntitiesTemplateDef<any, any, any>, over: BPEntitiesTemplateOverride<any, any, any>) {
        super(def.id);

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

        const comps = this.patchMap(this.byID(def.components), over.components) as BPEntityComponentsMap;

        Object.assign(comps, this.byID(over.add?.components));

        const compsGroups: Record<string, BPEntityComponentsMap> = {};
        const groupOverrides = over.componentsGroups as Record<string, Record<string, unknown> | null | undefined> | undefined;

        for (const [id, components] of Object.entries(def.componentsGroups) as [string, readonly BPEntityComponent[]][]) {
            const groupOverride = groupOverrides?.[id];

            if (groupOverride === null) {
                continue;
            }

            compsGroups[id] = this.patchMap(this.byID(components), groupOverride) as BPEntityComponentsMap;
        }

        for (const [id, list] of Object.entries(over.add?.componentsGroups ?? {})) {
            compsGroups[id] = { ...compsGroups[id], ...this.byID(list) };
        }

        const events = this.patchMap(def.events, over.events as Record<string, BPEntityEvents>) as Record<string, BPEntityEvents>;

        Object.assign(events, over.add?.events);

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
     * Metodo auxiliar que aplica un mapa de valores para un grupo de datos. Crea una copia superficial y los recorre. Eliminando cualquier null o undefined definido.
     * @param {T} base mapa de valores de datos en concreto.
     * @param {?Record<string, unknown>} [patch] (Opcional) Mapa a recorrer.
     * @returns {Record<string, unknown>} Devuelve el mapeo correcto revisado y sin datos undefined o null entre medio.
     * @template {Record<string, unknown>} T Datos genericos que se aceptan.
     * @author HaJuegos - 30-09-2026 
     * @private
     */
    private patchMap<T extends Record<string, unknown>>(base: T, patch?: Record<string, unknown>) {
        const out: Record<string, unknown> = { ...base };

        for (const [key, value] of Object.entries(patch ?? {})) {
            if (value == null) {
                delete out[key];
            } else if (value != undefined) {
                out[key] = value;
            }
        }

        return out;
    }

    /**
     * Metodo auxiliar que convierte una lista de builders de componentes en un mapa cuyas claves son los IDs que devuelve cada componente.
     * @param {BPEntityComponent[]} [list] (Opcional) Lista de componentes en concreto. Por defecto es un array vacio.
     * @returns {BPEntityComponentsMap} Devuelve el objecto convertido sin repetir IDs.
     * @author HaJuegos - 30-09-2026 
     * @private
     */
    private byID(list: readonly BPEntityComponent[] = []): BPEntityComponentsMap {
        return Object.fromEntries(list.map(c => [c.idComp, c]));
    }
}

/**
 * Funcion principal de fabricacion que permite la creacion de plantillas a partir de una definicion base.
 * @param {BPEntitiesTemplateDef<Comps, CG, Ev>} def Definiciones base de la entidad a crear.
 * @returns {(over?: BPEntitiesTemplateOverride<Comps, CG, Ev>) => FinalEntityBuilderTemplate} Devuelve una funcion para crear una instancia editable con cambios opcionales. 
 * @template {BPEntityComponent} Comps Mapa de componentes genericos para su definicion. 
 * @template {BPEntityGroupCompsList} CG Mapa de grupos de componentes genericos para su definicion.
 * @template {BPEntityEventsMap} Ev Mapa de eventos genericos para su definicion.
 * @author HaJuegos - 30-09-2026 
 * @export
 */
export function createBPEntityTemplate<const Comps extends readonly BPEntityComponent[], const CG extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap>(def: BPEntitiesTemplateDef<Comps, CG, Ev>) {
    return (over: BPEntitiesTemplateOverride<Comps, CG, Ev> = {}): FinalEntityBuilderTemplate => new FinalEntityBuilderTemplate(def, over);
}