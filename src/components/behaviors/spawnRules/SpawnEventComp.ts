import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnEventData extends BPComponent {
    event: string;
}

export class SetSpawnEvent extends BehaviorSpawnRuleComponentBuilder<SpawnEventData, "minecraft:spawn_event"> {
    /**
     * 
     * @param {SpawnEventData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SpawnEventData) {
        super("minecraft:spawn_event", params);
    }
}