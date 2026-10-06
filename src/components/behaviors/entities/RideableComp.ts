import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";

interface RideableData extends BPComponent {
    controllingSeat?: number;
    crouchingSkipInteract?: boolean;
    familyTypes?: string[];
    interactText?: string;
    dismountMode?: "default" | "on_top_center";
    onRiderEnterEvent?: string | EntityFiltersTarget;
    onRiderExitEvent?: string | EntityFiltersTarget;
    passengerMaxWidth?: number;
    pullInEntities?: boolean;
    riderCanInteract?: boolean;
    seatCount?: number;
    seats?: SeatsTypes[];
}

interface SeatsTypes {
    cameraRelaxDistanceSmoothing?: number;
    lockRiderRotation?: number;
    maxRiderCount?: number;
    minRiderCount?: number;
    position?: [number, number, number];
    rotateRiderBy?: MoLangValue;
    thirdPersonCameraRadius?: number;
}

export class SetRideable extends BehaviorEntityComponentBuilder<RideableData, "minecraft:rideable"> {
    /**
     * 
     * @param {RideableData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: RideableData) {
        super("minecraft:rideable", params);
    }
}