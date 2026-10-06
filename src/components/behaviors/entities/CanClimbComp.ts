import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CanClimbData extends BPComponent {

}

export class SetCanClimb extends BehaviorEntityComponentBuilder<CanClimbData, "minecraft:can_climb"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:can_climb");
    }
}