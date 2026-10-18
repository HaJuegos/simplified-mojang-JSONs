import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HeightFilterData extends BPComponent {
    min: number;
    max: number;
}

export class SetHeightFilter extends BehaviorSpawnRuleComponentBuilder<HeightFilterData, "minecraft:height_filter"> {
    /**
     * 
     * @param {HeightFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: HeightFilterData) {
        super("minecraft:height_filter", params);
    }
}