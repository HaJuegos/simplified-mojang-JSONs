import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

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
    onDiggingStart?: string | EntityFilter | EntityFilter[];
    onFailDuringDigging?: string | EntityFilter | EntityFilter[];
    onFailDuringSearching?: string | EntityFilter | EntityFilter[];
    onItemFound?: string | EntityFilter | EntityFilter[];
    onSearchingStart?: string | EntityFilter | EntityFilter[];
    onSuccess?: string | EntityFilter | EntityFilter[];
    searchRangeXz?: number;
    searchRangeY?: number;
    spawnItemAfterSeconds?: number;
    spawnItemPosOffset?: number;
    targetBlocks?: (string | MinecraftBlockTypes)[];
    targetDigPositionOffset?: number;
}

export class SetBehaviorRandomSearchAndDig extends BehaviorEntityComponentBuilder<BehaviorRandomSearchAndDigData> {
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