import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CanPowerJumpData extends BPComponent {

}

export class SetCanPowerJump extends BehaviorEntityComponentBuilder<CanPowerJumpData> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:can_power_jump");
    }
}