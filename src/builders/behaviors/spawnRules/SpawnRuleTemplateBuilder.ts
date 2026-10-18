import { BPSpawnRuleComponent } from "../../../types/behaviors/spawnRules/SpawnRuleCompTemplate";
import { BPSpawnRuleDefinition, BPSpawnRuleOverride, BPSpawnRuleTemplateInstance, ConditionsBlocks } from "../../../types/behaviors/spawnRules/SpawnRuleTemplate";
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

        const blocks: Map<string, BPSpawnRuleComponent>[] = [];

        /**
         * Funcion auxiliar que convierte la lista de arrays de conditions definidos en las plantillas para pasarlo a un formato mas entendible para el JSON final.
         * @param {ConditionsBlocks} block Lista de condiciones a considerar.
         * @returns {Map<string, BPSpawnRuleComponent>} Devuelve el mapeo correcto y adaptado a un formato preparado para el JSON final.
         * @author HaJuegos - 17-10-2026
         */
        const toMap = (block: ConditionsBlocks): Map<string, BPSpawnRuleComponent> => {
            const map = new Map<string, BPSpawnRuleComponent>();

            for (const comp of block) {
                map.set(comp.idComp, comp);
            }

            return map;
        };

        if (!over.clearAllData) {
            for (const block of def.conditions ?? []) {
                blocks.push(toMap(block));
            }

            if (over.conditions) {
                for (const [indexStr, patch] of Object.entries(over.conditions as unknown as Record<string, Record<string, unknown> | undefined>)) {
                    const target = blocks[Number(indexStr)];

                    if (!target || !patch) {
                        continue;
                    }

                    for (const value of Object.values(patch)) {
                        if (value instanceof BehaviorSpawnRuleComponentBuilder) {
                            target.set(value.idComp, value);
                        }
                    }
                }
            }
        }

        if (over.add?.conditions) {
            for (const block of over.add.conditions) {
                blocks.push(toMap(block));
            }
        }

        const finalConditions = blocks.map(block => Array.from(block.values())).filter(block => block.length > 0);

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
 * @template {readonly ConditionsBlocks[]} Comps Lista de componentes definidos a la base principal. 
 * @returns {BPSpawnRuleTemplateInstance<Comps>} Devuelve una funcion adiccional para permitir las adiccionales y modificaciones a la base principal post-edicion.
 * @author HaJuegos - 17-10-2026  
 * @export
 */
export function createBPSpawnRule<
    const Comps extends readonly ConditionsBlocks[] = []
>(def: BPSpawnRuleDefinition & { conditions?: Comps; }): BPSpawnRuleTemplateInstance<Comps> {
    return (over = {}) => {
        return new FinalSpawnRuleTemplateBuilder(def, over as unknown as BPSpawnRuleOverride<any>);
    };
}