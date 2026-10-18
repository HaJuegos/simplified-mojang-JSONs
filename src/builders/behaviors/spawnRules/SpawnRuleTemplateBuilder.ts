import { BPSpawnRuleComponent } from "../../../types/behaviors/spawnRules/SpawnRuleCompTemplate";
import { BPSpawnRuleDefinition, BPSpawnRuleOverride, BPSpawnRuleTemplateInstance } from "../../../types/behaviors/spawnRules/SpawnRuleTemplate";
import { BehaviorSpawnRuleBuilder } from "./SpawnRuleBuilder";
import { BehaviorSpawnRuleComponentBuilder } from "./SpawnRuleCompBuilder";

/**
 * Clase principal final para la creacion de un nuevo spawn rule con una estructura fija lista para la base y su edicion post-edicion.
 * @class FinalSpawnRuleTemplateBuilder
 * @extends {BehaviorSpawnRuleBuilder}
 * @author HaJuegos - 17-10-2026
 * @export
 */
export class FinalSpawnRuleTemplateBuilder extends BehaviorSpawnRuleBuilder {
    /**
     * Parametros iniciales y eventos para la creacion de un nuevo spawn rule. Inicialmente se requiere la definicion base fija para luego su edicion post-edicion de esta misma.
     * @param {BPSpawnRuleDefinition} def Definicion base inicial.
     * @param {BPSpawnRuleOverride<any>} over Definicion adiccional a la base inicial.
     * @author HaJuegos - 17-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPSpawnRuleDefinition, over: BPSpawnRuleOverride<any>) {
        super(def.idSpawnRule, def.categoryControl);

        const conditionsMap = new Map<string, BPSpawnRuleComponent>;

        if (!over.clearAllData) {
            if (def.conditions) {
                for (const comp of def.conditions) {
                    conditionsMap.set(comp.idComp, comp);
                }
            }

            if (over.conditions) {
                for (const [id, value] of Object.entries(over.conditions as Record<string, unknown>)) {
                    if (value == undefined) {
                        continue;
                    }

                    if (value instanceof BehaviorSpawnRuleComponentBuilder) {
                        conditionsMap.set(value.idComp, value);
                    }
                }
            }
        }

        if (over.add?.conditions) {
            for (const comp of over.add.conditions) {
                conditionsMap.set(comp.idComp, comp);
            }
        }

        const finalConditions = Array.from(conditionsMap.values());

        if (finalConditions.length > 0) {
            this.setConditionsSpawnRule(finalConditions);
        }
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
}

/**
 * Funcion principal de fabrica que construye finalmente la estructura final permitiendo la creacion de un nuevo spawn rule con una estructura fija para la base y luego permitiendo la edicion post-edicion a la misma.
 * @param {(BPSpawnRuleDefinition & { conditions?: Comps; })} def Definicion inicial a la base a crear. 
 * @template {readonly BPSpawnRuleComponent[]} Comps Lista de componentes definidos a la base principal. 
 * @returns {BPSpawnRuleTemplateInstance<Comps>} Devuelve una funcion adiccional para permitir las adiccionales y modificaciones a la base principal post-edicion.
 * @author HaJuegos - 17-10-2026  
 * @export
 */
export function createBPSpawnRule<
    const Comps extends readonly BPSpawnRuleComponent[] = []
>(def: BPSpawnRuleDefinition & { conditions?: Comps; }): BPSpawnRuleTemplateInstance<Comps> {
    return (over = {}) => {
        return new FinalSpawnRuleTemplateBuilder(def, over as unknown as BPSpawnRuleOverride<any>);
    };
}