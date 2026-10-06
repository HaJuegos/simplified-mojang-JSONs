import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorFloatTemptData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canGetScared?: boolean;
    canTemptWhileRidden?: boolean;
    canTemptVertically?: boolean;
    items?: string[] | MinecraftItemTypes[];
    soundInterval?: [number, number];
    stopDistance?: number;
    temptSound?: string;
    withinRadius?: number;
    onStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onTemptEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorFloatTempt extends BehaviorEntityComponentBuilder<BehaviorFloatTemptData, "minecraft:behavior.float_tempt"> {
    /**
     * 
     * @param {BehaviorFloatTemptData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFloatTemptData) {
        super("minecraft:behavior.float_tempt", params);
    }
}