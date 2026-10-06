import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface EquippableData extends BPComponent {
    slots: SlotsEquipTypes[];
}

interface SlotsEquipTypes {
    acceptedItems?: (string | TargetItemsTypes)[],
    interactText?: string,
    item?: string | TargetItemsTypes,
    onEquip?: EntityFilterTrigger,
    onUnequip?: EntityFilterTrigger,
    slot?: number;
}

export class SetEquippable extends BehaviorEntityComponentBuilder<EquippableData, "minecraft:equippable"> {
    /**
     * 
     * @param {EquippableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EquippableData) {
        super("minecraft:equippable", params);
    }
}