import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface VibrationDamperData extends BPComponent {

}

export class SetVibrationDamper extends BehaviorEntityComponentBuilder<VibrationDamperData, "minecraft:vibration_damper"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:vibration_damper");
    }
}