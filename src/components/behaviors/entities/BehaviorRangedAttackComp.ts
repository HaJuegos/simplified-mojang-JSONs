import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRangedAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackInterval?: {
        min: number;
        max: number;
    };
    attackRadius?: number;
    attackRadiusMin?: number;
    burstInterval?: number;
    burstShots?: number;
    chargeChargedTrigger?: number;
    chargeShootTrigger?: number;
    rangedFov?: number;
    setPersistent?: boolean;
    swing?: boolean;
    targetInSightTime?: number;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
}

export class SetBehaviorRangedAttack extends BehaviorEntityComponentBuilder<BehaviorRangedAttackData> {
    /**
     * 
     * @param {BehaviorRangedAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRangedAttackData) {
        super("minecraft:behavior.ranged_attack", params);
    }
}