import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DisallowSpawnsInBubbleData extends BPComponent {

}

export class SetDisallowSpawnsInBubble extends BehaviorSpawnRuleComponentBuilder<DisallowSpawnsInBubbleData, "minecraft:disallow_spawns_in_bubble"> {
    /**
     * 
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:disallow_spawns_in_bubble");
    }
}