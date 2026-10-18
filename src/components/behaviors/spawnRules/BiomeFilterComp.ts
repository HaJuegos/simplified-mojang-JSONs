import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BiomeFilterData extends BPComponent {

}

export class SetBiomeFilter extends BehaviorSpawnRuleComponentBuilder<BiomeFilterData, "minecraft:biome_filter"> {
    /**
     * 
     * @param {BiomeFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: EntityFilter | EntityFilter[]) {
        super("minecraft:biome_filter", params);
    }
}