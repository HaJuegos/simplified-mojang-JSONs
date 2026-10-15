import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type VanillaSlotsEquipsTypes = "slot.armor.body" | "slot.armor.chest" | "slot.armor.feet" | "slot.armor.head" | "slot.armor.legs" | "slot.weapon.mainhand" | "slot.weapon.offhand";

interface WearableData extends BPComponent {
    hidesPlayerLocation?: boolean;
    slot: VanillaSlotsEquipsTypes;
    protection?: number;
}

export class SetWearable extends BehaviorItemsComponentsBuilder<WearableData, "minecraft:wearable"> {
    /**
     * 
     * @param {WearableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: WearableData) {
        super("minecraft:wearable", params);
    }
}