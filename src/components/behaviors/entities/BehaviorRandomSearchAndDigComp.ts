import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorRandomSearchAndDigData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownRange?: {
        min: number;
        max: number;
    };
    diggingDurationRange?: {
        min: number;
        max: number;
    };
    findValidPositionRetries?: number;
    goalRadius?: number;
    itemTable?: string;
    onDiggingStart?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    onFailDuringDigging?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    onFailDuringSearching?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    onItemFound?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    onSearchingStart?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    onSuccess?: (string | EntityFilterTrigger) | (string | EntityFilterTrigger | EntityFilterTrigger)[];
    searchRangeXz?: number;
    searchRangeY?: number;
    spawnItemAfterSeconds?: number;
    spawnItemPosOffset?: number;
    targetBlocks?: (string | MinecraftBlockTypes)[];
    targetDigPositionOffset?: number;
}

export class SetBehaviorRandomSearchAndDig extends BehaviorEntityComponentBuilder<BehaviorRandomSearchAndDigData, "minecraft:behavior.random_search_and_dig"> {
    /**
     * 
     * @param {BehaviorRandomSearchAndDigData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomSearchAndDigData) {
        super("minecraft:behavior.random_search_and_dig", params);
    }
}