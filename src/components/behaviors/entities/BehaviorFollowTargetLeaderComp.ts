import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorFollowTargetLeaderData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    alwaysLookForLeader?: boolean;
    followDistance?: number;
    leaderFilters: EntityFilter | EntityFilter[];
    searchCooldown?: number;
    withinRadius?: number;
}

export class SetBehaviorFollowTargetLeader extends BehaviorEntityComponentBuilder<BehaviorFollowTargetLeaderData> {
    /**
     * 
     * @param {BehaviorFollowTargetLeaderData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowTargetLeaderData) {
        super("minecraft:behavior.follow_target_leader", params);
    }
}