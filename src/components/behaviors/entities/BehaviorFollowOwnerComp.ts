import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFollowOwnerData extends BPComponent {
    priority: number;
    postTeleportDistance?: number;
    speedMultiplier?: number;
    canTeleport?: boolean;
    ignoreVibration?: boolean;
    maxDistance?: number;
    startDistance?: number;
    stopDistance?: number;
}

export class SetBehaviorFollowOwner extends BehaviorEntityComponentBuilder<BehaviorFollowOwnerData> {
    /**
     * 
     * @param {BehaviorFollowOwnerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowOwnerData) {
        super("minecraft:behavior.follow_owner", params);
    }
}