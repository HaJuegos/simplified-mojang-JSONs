import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface ExperienceRewardData extends BPComponent {
    onBred?: number | MoLangValue;
    onDeath?: number | MoLangValue;
}

export class SetExperienceReward extends BehaviorEntityComponentBuilder<ExperienceRewardData, "minecraft:experience_reward"> {
    /**
     * 
     * @param {ExperienceRewardData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ExperienceRewardData) {
        super("minecraft:experience_reward", params);
    }
}