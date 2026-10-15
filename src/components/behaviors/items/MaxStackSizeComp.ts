import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type MaxStackSizeData = number | {
    value: number;
};

export class SetMaxStackSize extends BehaviorItemsComponentsBuilder<MaxStackSizeData, "minecraft:max_stack_size"> {
    /**
     * 
     * @param {MaxStackSizeData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MaxStackSizeData) {
        super("minecraft:max_stack_size", params);
    }
}