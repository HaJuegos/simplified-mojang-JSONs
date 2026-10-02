import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnEquipmentChangedData extends BPComponent {
    slots: OnEquipTypes[];
}

interface OnEquipTypes {
    onEquip: EntityFilterTrigger;
    onUnequip: EntityFilterTrigger;
    slot: number;
}

export class SetOnEquipmentChanged extends BehaviorEntityComponentBuilder<OnEquipmentChangedData, "minecraft:on_equipment_changed"> {
    /**
     * 
     * @param {OnEquipmentChangedData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnEquipmentChangedData) {
        super("minecraft:on_equipment_changed", params);
    }
}