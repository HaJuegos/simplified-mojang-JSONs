import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FreeCameraControlledData extends BPComponent {
    backwardsMovementModifier?: number;
    strafeSpeedModifier?: number;
}

export class SetFreeCameraControlled extends BehaviorEntityComponentBuilder<FreeCameraControlledData> {
    /**
     * 
     * @param {FreeCameraControlledData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FreeCameraControlledData) {
        super("minecraft:free_camera_controlled", params);
    }
}