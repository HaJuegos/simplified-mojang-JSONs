import { BPLootTableFinalDefinition } from "../../../types/behaviors/lootTables/LootTablesTemplate";
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
     * @param {BPLootTableFinalDefinition} def Los valores a definir en el loot table.
     * @author HaJuegos - 08-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPLootTableFinalDefinition) {
        super();

        this.setPools(def.pools);
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
 * @param {BPLootTableFinalDefinition} def Definicion base de los parametros para la plantilla fija. 
 * @returns {string} Devuelve la plantilla base ya creada y adaptada a txt para el JSON final.
 * @author HaJuegos - 08-10-2026
 * @export
 */
export function createBPLootTable(def: BPLootTableFinalDefinition): string {
    return new FinalLootTableBuilderTemplate(def).finalBuild();
}