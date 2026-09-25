import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";

interface BehaviorMoveToBlockData extends BPComponent {
    priority: number;
    goalRadius?: number;
    onStayCompleted?: string | EntityFilter | EntityFilter[];
    onReach?: string | EntityFilter | EntityFilter[];
    startChance?: number;
    searchRange?: number;
    searchHeight?: number;
    stayDuration?: number;
    targetSelectionMethod?: "random" | "nearest";
    targetOffset?: [number, number, number];
    targetBlocks?: (string | TargetItemsTypes)[];
    targetBlockFilters?: EntityFilter[];
    tickInterval?: number;
}

export class SetBehaviorMoveToBlock extends BehaviorEntityComponentBuilder<BehaviorMoveToBlockData> {
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