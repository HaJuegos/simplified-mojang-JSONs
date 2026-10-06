import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorPlayData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    chanceToStart?: number;
    followDistance?: number;
    friendSearchArea?: [number, number, number];
    friendTypes?: (string | MinecraftEntityTypes | EntityFilterTrigger)[];
    maxPlayDurationSeconds?: number;
    randomPosSearchHeight?: number;
    randomPosSearchRange?: number;
}

export class SetBehaviorPlay extends BehaviorEntityComponentBuilder<BehaviorPlayData, "minecraft:behavior.play"> {
    /**
     * 
     * @param {BehaviorPlayData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPlayData) {
        super("minecraft:behavior.play", params);
    }
}