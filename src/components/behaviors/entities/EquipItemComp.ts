import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface EquipItemData extends BPComponent {
    excludedItems?: (string | TargetItemsTypes)[];
    canWearArmor?: boolean;
}

export class SetEquipItem extends BehaviorEntityComponentBuilder<EquipItemData> {
    /**
     * 
     * @param {EquipItemData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EquipItemData) {
        super("minecraft:equip_item", params);
    }
}