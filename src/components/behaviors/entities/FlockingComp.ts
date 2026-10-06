import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FlockingData extends BPComponent {
    blockDistance?: number;
    blockWeight?: number;
    breachInfluence?: number;
    cohesionThreshold?: number;
    cohesionWeight?: number;
    goalWeight?: number;
    highFlockLimit?: number;
    inWater?: boolean;
    influenceRadius?: number;
    innnerCohesionThreshold?: number;
    lonerChance?: number;
    lowFlockLimit?: number;
    matchVariants?: boolean;
    maxHeight?: number;
    minHeight?: number;
    separationThreshold?: number;
    separationWeight?: number;
    useCenterOfMass?: boolean;
}

export class SetFlocking extends BehaviorEntityComponentBuilder<FlockingData, "minecraft:flocking"> {
    /**
     * 
     * @param {FlockingData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FlockingData) {
        super("minecraft:flocking", params);
    }
}