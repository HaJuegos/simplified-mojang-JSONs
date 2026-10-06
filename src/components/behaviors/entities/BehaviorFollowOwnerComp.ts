import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

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

export class SetBehaviorFollowOwner extends BehaviorEntityComponentBuilder<BehaviorFollowOwnerData, "minecraft:behavior.follow_owner"> {
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