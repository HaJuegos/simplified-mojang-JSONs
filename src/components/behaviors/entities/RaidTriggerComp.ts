import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFiltersTarget } from "../../../types/EntityFilters";

interface RaidTriggerData extends BPComponent {
    triggeredEvent?: EntityFiltersTarget | string;
}

export class SetRaidTrigger extends BehaviorEntityComponentBuilder<RaidTriggerData, "minecraft:raid_trigger"> {
    /**
     * 
     * @param {RaidTriggerData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: RaidTriggerData) {
        super("minecraft:raid_trigger", params);
    }
}