import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CraftingTableData extends BPComponent {
    craftingTags: string[];
    tableName: string;
}

export class SetCraftingTable extends BehaviorBlockComponentBuilder<CraftingTableData, "minecraft:crafting_table"> {
    /**
     * 
     * @param {CraftingTableData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: CraftingTableData) {
        super("minecraft:crafting_table", params);
    }
}