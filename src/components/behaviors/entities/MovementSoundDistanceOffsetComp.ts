import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementSoundDistanceOffsetData extends BPComponent {
    value: number;
}

export class SetMovementSoundDistanceOffset extends BehaviorEntityComponentBuilder<MovementSoundDistanceOffsetData, "minecraft:movement_sound_distance_offset"> {
    /**
     * 
     * @param {MovementSoundDistanceOffsetData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementSoundDistanceOffsetData) {
        super("minecraft:movement_sound_distance_offset", params);
    }
}