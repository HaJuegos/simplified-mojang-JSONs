import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorNearestAttackableTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    attackInterval?: number | {
        min: number;
        max: number;
    };
    attackIntervalMin?: number;
    attackOwner?: boolean;
    mustReach?: boolean;
    mustSee?: boolean;
    mustSeeForgetDuration?: number;
    persistTime?: number;
    reselectTargets?: boolean;
    scanInterval?: number;
    setPersistent?: boolean;
    targetAcquisitionProbability?: number;
    targetInvisibleMultiplier?: number;
    targetSearchHeight?: number;
    targetSneakVisibilityMultiplier?: number;
    withinRadius?: number;
}

export class SetBehaviorNearestAttackableTarget extends BehaviorEntityComponentBuilder<BehaviorNearestAttackableTargetData> {
    /**
     * 
     * @param {BehaviorNearestAttackableTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorNearestAttackableTargetData) {
        super("minecraft:behavior.nearest_attackable_target", params);
    }
}