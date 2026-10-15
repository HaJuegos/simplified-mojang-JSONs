import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface StorageWeightModifierData extends BPComponent {
    weightInStorageItem: number;
}

export class SetStorageWeightModifier extends BehaviorItemsComponentsBuilder<StorageWeightModifierData, "minecraft:storage_weight_modifier"> {
    /**
     * 
     * @param {StorageWeightModifierData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: StorageWeightModifierData) {
        super("minecraft:storage_weight_modifier", params);
    }
}