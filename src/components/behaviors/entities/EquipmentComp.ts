import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntitySlotsArmor } from "../../../types/EntityFilters";

interface EquipmentData extends BPComponent {
    slotDropChance?: SlotDropChanceTypes[];
    table?: string;
}

interface SlotDropChanceTypes {
    dropChance: number;
    slot: EntitySlotsArmor;
}

export class SetEquipment extends BehaviorEntityComponentBuilder<EquipmentData, "minecraft:equipment"> {
    /**
     * 
     * @param {EquipmentData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EquipmentData) {
        super("minecraft:equipment", params);
    }
}