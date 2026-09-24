import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorPlayData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    chanceToStart?: number;
    followDistance?: number;
    friendSearchArea?: [number, number, number];
    friendTypes?: (string | MinecraftEntityTypes)[];
    maxPlayDurationSeconds?: number;
    randomPosSearchHeight?: number;
    randomPosSearchRange?: number;
}

export class SetBehaviorPlay extends BehaviorEntityComponentBuilder<BehaviorPlayData> {
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