import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CanClimbData extends BPComponent {

}

export class SetCanClimb extends BehaviorEntityComponentBuilder<CanClimbData> {
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