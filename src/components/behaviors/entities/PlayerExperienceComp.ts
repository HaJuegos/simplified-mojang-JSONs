import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PlayerExperienceData extends BPComponent {
    value?: number;
    max?: number;
}

export class SetPlayerExperience extends BehaviorEntityComponentBuilder<PlayerExperienceData, "minecraft:player.experience"> {
    /**
     * 
     * @param {PlayerExperienceData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PlayerExperienceData) {
        super("minecraft:player.experience", params);
    }
}