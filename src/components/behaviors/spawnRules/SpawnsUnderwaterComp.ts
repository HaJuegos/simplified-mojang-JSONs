import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsUnderwaterData extends BPComponent {

}

export class SetSpawnsUnderwater extends BehaviorSpawnRuleComponentBuilder<SpawnsUnderwaterData, "minecraft:spawns_underwater"> {
    /**
     * 
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:spawns_underwater");
    }
}