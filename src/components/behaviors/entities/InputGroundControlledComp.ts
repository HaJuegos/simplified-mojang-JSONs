import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface InputGroundControlledData extends BPComponent {

}

export class SetInputGroundControlled extends BehaviorEntityComponentBuilder<InputGroundControlledData, "minecraft:input_ground_controlled"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:input_ground_controlled");
    }
}