import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BodyRotationBlockedData extends BPComponent {

}

export class SetBodyRotationBlocked extends BehaviorEntityComponentBuilder<BodyRotationBlockedData> {
    /**
     * 
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:body_rotation_blocked");
    }
}