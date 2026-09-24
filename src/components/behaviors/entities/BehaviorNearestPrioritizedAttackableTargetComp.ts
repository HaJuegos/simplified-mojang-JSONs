import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetPriorityFilters } from "../../../types/EntityFilters";

interface BehaviorNearestPrioritizedAttackableTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetPriorityFilters | EntityAttackableTargetPriorityFilters[];
    hurtOwner?: boolean;
    attackInterval?: number;
    cooldown?: number;
    mustReach?: boolean;
    mustSee?: boolean;
    mustSeeForgetDuration?: number;
    persistTime?: number;
    reselectTargets?: boolean;
    scanInterval?: number;
    setPersistent?: boolean;
    targetSearchHeight?: number;
    withinRadius?: number;
}

export class SetBehaviorNearestPrioritizedAttackableTarget extends BehaviorEntityComponentBuilder<BehaviorNearestPrioritizedAttackableTargetData> {
    /**
     * 
     * @param {BehaviorNearestPrioritizedAttackableTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorNearestPrioritizedAttackableTargetData) {
        super("minecraft:behavior.nearest_prioritized_attackable_target", params);
    }
}