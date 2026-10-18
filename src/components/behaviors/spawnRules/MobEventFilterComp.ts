import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type MobEventsList = "minecraft:pillager_patrols_event" | "minecraft:wandering_trader_event" | "minecraft:ender_dragon_event";

interface MobEventFilterData extends BPComponent {
    event: MobEventsList;
}

export class SetMobEventFilter extends BehaviorSpawnRuleComponentBuilder<MobEventFilterData, "minecraft:mob_event_filter"> {
    /**
     * 
     * @param {MobEventFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MobEventFilterData) {
        super("minecraft:mob_event_filter", params);
    }
}