import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsLavaData extends BPComponent {

}

export class SetSpawnsLava extends BehaviorSpawnRuleComponentBuilder<SpawnsLavaData, "minecraft:spawns_lava"> {
    /**
     * 
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:spawns_lava");
    }
}