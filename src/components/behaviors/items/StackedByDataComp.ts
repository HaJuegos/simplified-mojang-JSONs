import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type StackedByDataData = boolean | {
    values?: boolean;
};

export class SetStackedByData extends BehaviorItemsComponentsBuilder<StackedByDataData, "minecraft:stacked_by_data"> {
    /**
     * 
     * @param {StackedByDataData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: StackedByDataData) {
        super("minecraft:stacked_by_data", params);
    }
}