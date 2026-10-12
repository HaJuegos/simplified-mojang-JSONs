import { BPLootTableFinalOverDefinition, BPLootTableTemplateDef, BPLootTableTemplateOver, PoolsParamsTypes } from "../../../types/behaviors/lootTables/LootTablesTemplate";
import { BehaviorLooTablesBuilder } from "./LootTablesBuilder";

/**
 * Clase principal que crea una plantilal definitiva para la creacion de un loot table.
 * @class FinalLootTableBuilderTemplate
 * @extends {BehaviorLooTablesBuilder}
 * @author HaJuegos - 08-10-2026
 */
class FinalLootTableBuilderTemplate extends BehaviorLooTablesBuilder {
    /**
     * Argumentos principales para la creacion de un Loot Table de una plantilla en concreto.
     * @param {BPLootTableTemplateDef} def Los valores a definir fijos en el loot table.
     * @param {BPLootTableTemplateOver} over Los valores a modificar post-edicion en el loot table.
     * @author HaJuegos - 11-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPLootTableTemplateDef<any>, over: BPLootTableFinalOverDefinition = {}) {
        super();

        let pools: PoolsParamsTypes[] = [];

        if (!over.clearAllData) {
            pools = [...(def.pools ?? [])];

            if (over.pools) {
                for (const [indexStr, patch] of Object.entries(over.pools)) {
                    const index = Number(indexStr);

                    if (!isNaN(index) && pools[index] && patch != null) {
                        pools[index] = { ...pools[index], ...patch } as PoolsParamsTypes;
                    }
                }
            }
        }

        if (over.add?.pools) {
            pools.push(...over.add.pools);
        }

        this.setPools(pools);
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 08-10-2026 
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Loot Table a patir de una definicion fija.
 * @param {BPLootTableTemplateDef<Pools>} def Definicion base de los parametros para la plantilla fija. 
 * @returns {<const AddPools extends readonly PoolsParamsTypes[] = []>(over?: BPLootTableTemplateOver<Pools, AddPools>) => FinalLootTableBuilderTemplate} Devuelve el objecto mismo para las modificaciones finales en caso de requerirse, a base de la plantilla fija creada.
 * @template {readonly PoolsParamsTypes[]} Pools Pools a validar para la plantilla a editar.
 * @author HaJuegos - 08-10-2026
 * @export
 */
export function createBPLootTable<
    const Pools extends readonly PoolsParamsTypes[]
>(def: BPLootTableTemplateDef<Pools>) {
    return <
        const AddPools extends readonly PoolsParamsTypes[] = []
    >(over: BPLootTableTemplateOver<Pools, AddPools> = {}): FinalLootTableBuilderTemplate => {
        return new FinalLootTableBuilderTemplate(def as unknown as BPLootTableTemplateDef<any>, over as unknown as BPLootTableFinalOverDefinition);
    };
}