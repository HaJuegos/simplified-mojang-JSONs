import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFiltersTarget, TargetItemsTypes } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";

type TargetSelectionMethod = 'random' | 'nearest';

interface BehaviorAvoidBlockData extends BPComponent {
    priority: number;
    tickInterval?: number;
    searchRange?: number;
    searchHeight?: number;
    sprintSpeedModifier?: number;
    targetSelectionMethod?: TargetSelectionMethod;
    targetBlocks?: TargetItemsTypes[];
    avoidBlockSound: string;
    walkSpeedModifier?: number;
    onEscape?: EntityFiltersTarget[];
    soundInterval?: number | { min: number; max: number; };
}

export class SetBehaviorAvoidBlock extends BehaviorEntityComponentBuilder<BehaviorAvoidBlockData> {
    /**
     * 
     * @param {BehaviorAvoidBlockData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorAvoidBlockData) {
        super("minecraft:behavior.avoid_block", params);
    }
}