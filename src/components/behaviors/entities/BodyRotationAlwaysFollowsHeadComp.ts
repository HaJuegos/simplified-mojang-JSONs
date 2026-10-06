import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

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