import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes, EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";

interface HealableData extends BPComponent {
    filters?: EntityFilter | EntityFilter[];
    forceUse?: boolean;
    items?: ItemsHealablesTypes[];
}

interface ItemsHealablesTypes {
    filters?: {};
    item?: (string | MinecraftItemTypes | TargetItemsTypes);
    resultItem?: (string | MinecraftItemTypes | TargetItemsTypes);
    effects?: EffectHealhableTypes[];
    healAmount?: number;
}

interface EffectHealhableTypes {
    name: EntityEffectTypes | string;
    duration: "infinite" | number;
    amplifier: number;
}

export class SetHealable extends BehaviorEntityComponentBuilder<HealableData, "minecraft:healable"> {
    /**
     * 
     * @param {HealableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: HealableData) {
        super("minecraft:healable", params);
    }
}