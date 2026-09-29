import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface OutOfControlData extends BPComponent {

}

export class SetOutOfControl extends BehaviorEntityComponentBuilder<OutOfControlData> {
    /**
     * 
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:out_of_control");
    }
}