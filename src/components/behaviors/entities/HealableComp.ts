import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";

interface HealableData extends BPComponent {
    filters?: EntityFilter | EntityFilter[];
    forceUse?: boolean;
    items?: (string | MinecraftItemTypes | TargetItemsTypes)[];
}

export class SetHealable extends BehaviorEntityComponentBuilder<HealableData> {
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