import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorCircleAroundAnchorData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    radiusRange?: {
        min: number,
        max: number;
    };
    radiusChangeChance?: number;
    heightAboveTargetRange?: {
        min: number,
        max: number;
    };
    heightOffsetRange?: {
        min: number,
        max: number;
    };
    heightChangeChance?: number;
    goalRadius?: number;
    radiusChange?: number;
    radiusAdjustmentChance?: number;
    heightAdjustmentChance?: number;
    angleChange?: number;
}

export class SetBehaviorCircleAroundAnchor extends BehaviorEntityComponentBuilder<BehaviorCircleAroundAnchorData> {
    /**
     * 
     * @param {BehaviorCircleAroundAnchorData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorCircleAroundAnchorData) {
        super("minecraft:behavior.circle_around_anchor", params);
    }
}