import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BuoyantData extends BPComponent {
    baseBuoyancy?: number;
    applyGravity?: boolean;
    buoyancy?: number;
    bigWaveProbability?: number;
    bigWaveSpeed?: number;
    dragDownOnBuoyancyRemoved?: number;
    liquidBlocks?: (string | MinecraftBlockTypes)[];
    movementType?: "waves" | "bobbing" | "none";
    canAutoStepFromLiquid?: boolean;
}

export class SetBuoyant extends BehaviorEntityComponentBuilder<BuoyantData, "minecraft:buoyant"> {
    /**
     * 
     * @param {BuoyantData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BuoyantData) {
        super("minecraft:buoyant", params);
    }
}