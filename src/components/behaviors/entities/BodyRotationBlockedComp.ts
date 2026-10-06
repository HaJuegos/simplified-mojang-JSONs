import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BodyRotationBlockedData extends BPComponent {

}

export class SetBodyRotationBlocked extends BehaviorEntityComponentBuilder<BodyRotationBlockedData, "minecraft:body_rotation_blocked"> {
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