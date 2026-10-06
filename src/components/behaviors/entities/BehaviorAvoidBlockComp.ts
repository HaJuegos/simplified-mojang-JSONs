import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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
    targetBlocks?: (string | MinecraftBlockTypes | TargetItemsTypes)[];
    avoidBlockSound: string;
    walkSpeedModifier?: number;
    onEscape?: EntityFiltersTarget[];
    soundInterval?: number | { min: number; max: number; };
}

export class SetBehaviorAvoidBlock extends BehaviorEntityComponentBuilder<BehaviorAvoidBlockData, "minecraft:behavior.avoid_block"> {
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