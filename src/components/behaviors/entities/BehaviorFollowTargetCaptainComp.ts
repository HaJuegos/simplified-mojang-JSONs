import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFollowTargetCaptainData extends BPComponent {
    priority?: number;
    speedMultiplier?: number;
    withinRadius?: number;
    followDistance?: number;
}

export class SetBehaviorFollowTargetCaptain extends BehaviorEntityComponentBuilder<BehaviorFollowTargetCaptainData, "minecraft:behavior.follow_target_captain"> {
    /**
     * 
     * @param {BehaviorFollowTargetCaptainData} params Parametros del componente.
     * @author HaJuegos - 05-10-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowTargetCaptainData) {
        super("minecraft:behavior.follow_target_captain", params);
    }
}