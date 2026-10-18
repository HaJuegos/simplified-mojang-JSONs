import { PopulationControlsVanilla } from "../../../types/behaviors/spawnRules/SpawnRuleTemplate";
import { BehaviorSpawnRuleComponentBuilder } from "./SpawnRuleCompBuilder";

/**
 * Clase principal con estructura fija para la creacion de un Spawn Rule.
 * @class BehaviorSpawnRuleBuilder
 * @author HaJuegos - 17-10-2026
 * @export
 */
export class BehaviorSpawnRuleBuilder {
    /**
     * Version del format version que tomara el spawn rule a crear.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly spawnRuleVersion: string = "1.11.0";

    /**
     * ID del spawn rule a crear en concreto.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idSpawnRule: string = "ha:test";

    /**
     * Categoria de la mob cap en cuestion que tomara el spawn rule a crear.
     * @type {PopulationControlsVanilla}
     * @private
     */
    private categoryControl: PopulationControlsVanilla;

    /**
     * (Opcional) Lista de condiciones para que este spawn rule a crear, se ejecute.
     * @type {(BehaviorSpawnRuleComponentBuilder<any>[][] | undefined)}
     * @private
     */
    private conditions: BehaviorSpawnRuleComponentBuilder<any>[][] | undefined;

    /**
     * Parametros iniciales y eventos para la creacion del spawn rule.
     * @param {string} idSpawnRule ID del spawn rule a crear en concreto.
     * @param {PopulationControlsVanilla} [categoryControl] (Opcional) La mob cap a elejir del spawn rule en concreto. Por defecto, siempre sera "ambient".
     * @author HaJuegos - 17-10-2026 
     * @constructor
     * @protected
     */
    protected constructor (idSpawnRule: string, categoryControl: PopulationControlsVanilla = "ambient") {
        this.idSpawnRule = idSpawnRule;
        this.categoryControl = categoryControl;
    }

    /**
     * Metodo principal auxiliar que asigna los condicions al spawn rule a crear.
     * @param {BehaviorSpawnRuleComponentBuilder<any>[][]} conditions Lista de conditions a añadir al spawn rule en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 17-10-2026
     * @protected
     */
    protected setConditionsSpawnRule(conditions: BehaviorSpawnRuleComponentBuilder<any>[][]): this {
        this.conditions = conditions;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del spawn_rule.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el biome listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se fijo un ID del spawn rule.
     * 
     * @author HaJuegos - 17-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idSpawnRule) {
            throw new Error("[CATLOG] Error: El spawn rule no tiene definido un ID. Añadelo.");
        }

        const conditionsList: Record<string, unknown>[] = [];

        if (this.conditions && Array.isArray(this.conditions)) {
            for (const block of this.conditions) {
                const conditionObj: Record<string, unknown> = {};

                for (const comp of block) {
                    Object.assign(conditionObj, comp.build());
                }

                if (Object.keys(conditionObj).length > 0) {
                    conditionsList.push(conditionObj);
                }
            }
        }

        const preSpawnRule = {
            format_version: this.spawnRuleVersion,
            "minecraft:spawn_rules": {
                description: {
                    identifier: this.idSpawnRule,
                    population_control: this.categoryControl
                },
                ...(conditionsList.length > 0 ? { conditions: conditionsList } : {})
            }
        };

        const finalObj = Object.freeze(preSpawnRule);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}