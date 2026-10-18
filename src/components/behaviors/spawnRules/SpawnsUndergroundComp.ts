import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsUndergroundData extends BPComponent {

}

export class SetSpawnsUnderground extends BehaviorSpawnRuleComponentBuilder<SpawnsUndergroundData, "minecraft:spawns_underground"> {
    /**
     * 
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:spawns_underground");
    }
}