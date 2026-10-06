import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface VibrationListenerData extends BPComponent {

}

export class SetVibrationListener extends BehaviorEntityComponentBuilder<VibrationListenerData, "minecraft:vibration_listener"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:vibration_listener");
    }
}