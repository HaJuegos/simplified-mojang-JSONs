import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorTakeBlockData extends BPComponent {
    priority: number;
    affectedByGriefingRule?: boolean;
    blocks?: (string | MinecraftBlockTypes)[];
    canTake?: EntityFilter | EntityFilter[];
    chance?: number;
    onTake?: string | EntityFiltersTarget | EntityFiltersTarget[];
    requiresLineOfSight?: boolean;
    xzRange?: {
        min: number;
        max: number;
    };
    yRange?: {
        min: number;
        max: number;
    };
}

export class SetBehaviorTakeBlock extends BehaviorEntityComponentBuilder<BehaviorTakeBlockData, "minecraft:behavior.take_block"> {
    /**
     * 
     * @param {BehaviorTakeBlockData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTakeBlockData) {
        super("minecraft:behavior.take_block", params);
    }
}