import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SoundData extends BPComponent {
    sound: string;
}

export class SetSound extends BehaviorBlockComponentBuilder<SoundData, "minecraft:sound"> {
    /**
     * 
     * @param {SoundData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SoundData) {
        super("minecraft:sound", params);
    }
}