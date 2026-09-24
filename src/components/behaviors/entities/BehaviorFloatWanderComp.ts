import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFloatWanderData extends BPComponent {
    priority: number;
    additionalCollisionBuffer?: boolean;
    allowNavigatingThroughLiquids?: boolean;
    xzDist?: number;
    yDist?: number;
    yOffset?: number;
    mustReach?: boolean;
    floatWanderHasMoveControl?: boolean;
    navigateAroundSurface?: boolean;
    randomReselect?: boolean;
    surfaceXzDist?: number;
    surfaceYDist?: number;
    useHomePositionRestriction?: boolean;
    floatDuration?: {
        min: number,
        max: number;
    };
}

export class SetBehaviorFloatWander extends BehaviorEntityComponentBuilder<BehaviorFloatWanderData> {
    /**
     * 
     * @param {BehaviorFloatWanderData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFloatWanderData) {
        super("minecraft:behavior.float_wander", params);
    }
}