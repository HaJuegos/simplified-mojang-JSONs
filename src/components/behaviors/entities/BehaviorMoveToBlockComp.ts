import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";

interface BehaviorMoveToBlockData extends BPComponent {
    priority: number;
    goalRadius?: number;
    onStayCompleted?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onReach?: string | EntityFilterTrigger | EntityFilterTrigger[];
    startChance?: number;
    searchRange?: number;
    searchHeight?: number;
    stayDuration?: number;
    targetSelectionMethod?: "random" | "nearest";
    targetOffset?: [number, number, number];
    targetBlocks?: (string | TargetItemsTypes)[];
    targetBlockFilters?: EntityFilter | EntityFilter[];
    tickInterval?: number;
}

export class SetBehaviorMoveToBlock extends BehaviorEntityComponentBuilder<BehaviorMoveToBlockData, "minecraft:behavior.move_to_block"> {
    /**
     * 
     * @param {BehaviorMoveToBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToBlockData) {
        super("minecraft:behavior.move_to_block", params);
    }
}