import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorPlaceBlockData extends BPComponent {
    priority: number;
    affectedByGriefingRule?: boolean;
    canPlace?: EntityFilter | EntityFilter[];
    chance?: number;
    onPlace?: string | EntityFiltersTarget;
    placeableCarriedBlocks?: (string | MinecraftBlockTypes)[];
    randomlyPlaceableBlocks?: (string | MinecraftBlockTypes)[];
    xzRange?: {
        min: number;
        max: number;
    };
    yRange?: {
        min: number;
        max: number;
    };
}

export class SetBehaviorPlaceBlock extends BehaviorEntityComponentBuilder<BehaviorPlaceBlockData> {
    /**
     * 
     * @param {BehaviorPlaceBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPlaceBlockData) {
        super("minecraft:behavior.place_block", params);
    }
}