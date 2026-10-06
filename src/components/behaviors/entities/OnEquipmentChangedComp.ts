import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger, EntitySlotsArmor } from "../../../types/EntityFilters";

interface OnEquipmentChangedData extends BPComponent {
    slots: OnEquipTypes[];
}

interface OnEquipTypes {
    onEquip: string | EntityFilterTrigger;
    onUnequip: string | EntityFilterTrigger;
    slot: EntitySlotsArmor;
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