import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CanPowerJumpData extends BPComponent {

}

export class SetCanPowerJump extends BehaviorEntityComponentBuilder<CanPowerJumpData, "minecraft:can_power_jump"> {
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