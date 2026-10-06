import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RotationLockedToVehicleData extends BPComponent {

}

export class SetRotationLockedToVehicle extends BehaviorEntityComponentBuilder<RotationLockedToVehicleData, "minecraft:rotation_locked_to_vehicle"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:rotation_locked_to_vehicle");
    }
}