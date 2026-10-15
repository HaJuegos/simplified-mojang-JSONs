import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface StorageWeightLimitData extends BPComponent {
    maxWeightLimit: number;
}

export class SetStorageWeightLimit extends BehaviorItemsComponentsBuilder<StorageWeightLimitData, "minecraft:storage_weight_limit"> {
    /**
     * 
     * @param {StorageWeightLimitData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: StorageWeightLimitData) {
        super("minecraft:storage_weight_limit", params);
    }
}