import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PlayerInVillageFilterData extends BPComponent {
    distance: number;
    villageBorderTolerance: number;
}

export class SetPlayerInVillageFilter extends BehaviorSpawnRuleComponentBuilder<PlayerInVillageFilterData, "minecraft:player_in_village_filter"> {
    /**
     * 
     * @param {PlayerInVillageFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: PlayerInVillageFilterData) {
        super("minecraft:player_in_village_filter", params);
    }
}