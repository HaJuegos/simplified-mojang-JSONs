import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface SoundVolumeData extends BPComponent {
    value?: number;
}

export class SetSoundVolume extends BehaviorEntityComponentBuilder<SoundVolumeData, "minecraft:sound_volume"> {
    /**
     * 
     * @param {SoundVolumeData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SoundVolumeData) {
        super("minecraft:sound_volume", params);
    }
}