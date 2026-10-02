import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface GiveableData extends BPComponent {
    triggers: TriggerGiveTypes;
}

interface TriggerGiveTypes {
    cooldown: number;
    items: (string | MinecraftItemTypes | TargetItemsTypes)[];
    onGive?: EntityFilterTrigger;
}

export class SetGiveable extends BehaviorEntityComponentBuilder<GiveableData, "minecraft:giveable"> {
    /**
     * 
     * @param {GiveableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GiveableData) {
        super("minecraft:giveable", params);
    }
}