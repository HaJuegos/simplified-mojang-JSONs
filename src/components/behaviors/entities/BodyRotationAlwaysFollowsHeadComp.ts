import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BodyRotationAlwaysFollowsHeadData extends BPComponent {

}

export class SetBodyRotationAlwaysFollowsHead extends BehaviorEntityComponentBuilder<BodyRotationAlwaysFollowsHeadData, "minecraft:body_rotation_always_follows_head"> {
    /**
     * 
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:body_rotation_always_follows_head");
    }
}