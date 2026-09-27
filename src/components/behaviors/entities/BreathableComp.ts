import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BreathableData extends BPComponent {
    totalSupply?: number;
    suffocateTime?: number;
    inhaleTime?: number;
    breathesAir?: boolean;
    breathesWater?: boolean;
    canDehydrate?: boolean;
    breathesLava?: boolean;
    breathesSolids?: boolean;
    generatesBubbles?: boolean;
    breatheBlocks?: (string | MinecraftBlockTypes)[];
    nonBreatheBlocks?: (string | MinecraftBlockTypes)[];
}

export class SetBreathable extends BehaviorEntityComponentBuilder<BreathableData> {
    /**
     * 
     * @param {BreathableData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BreathableData) {
        super("minecraft:breathable", params);
    }
}