import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type EnchanmentsListTypes = "armor_feet" | "armor_torso" | "armor_head" | "armor_legs" | "axe" | "bow" | "carrot_stick" | "cosmetic_head" | "crossbow" | "elytra" | "fishing_rod" | "flintsteel" | "g_armor" | "g_digging" | "g_tool" | "hoe" | "melee_spear" | "none" | "pickaxe" | "shears" | "shield" | "shovel" | "trident" | "sword";

interface EnchantableData extends BPComponent {
    slot: "all" | EnchanmentsListTypes;
    value: number;
}

export class SetEnchantable extends BehaviorItemsComponentsBuilder<EnchantableData, "minecraft:enchantable"> {
    /**
     * 
     * @param {EnchantableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: EnchantableData) {
        super("minecraft:enchantable", {
            ...params,
            slot: params.slot == "trident" ? "spear" : params.slot
        } as EnchantableData);
    }
}