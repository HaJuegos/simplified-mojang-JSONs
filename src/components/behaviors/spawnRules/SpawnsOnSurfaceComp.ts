import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsOnSurfaceData extends BPComponent {

}

export class SetSpawnsOnSurface extends BehaviorSpawnRuleComponentBuilder<SpawnsOnSurfaceData, "minecraft:spawns_on_surface"> {
    /**
     * 
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:spawns_on_surface");
    }
}