import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type MaxLvLBight = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

interface BrightnessFilterData extends BPComponent {
    adjustForWeather: boolean;
    min: MaxLvLBight;
    max: MaxLvLBight;
}

export class SetBrightnessFilter extends BehaviorSpawnRuleComponentBuilder<BrightnessFilterData, "minecraft:brightness_filter"> {
    /**
     * 
     * @param {BrightnessFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: BrightnessFilterData) {
        super("minecraft:brightness_filter", params);
    }
}