import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";

interface SchedulerData extends BPComponent {
    minDelaySecs?: number;
    maxDelaySecs?: number;
    scheduledEvents?: ScheduledTypes[];
}

interface ScheduledTypes {
    event: string | EntityFiltersTarget;
    filters: EntityFilter | EntityFilter[];
}

export class SetScheduler extends BehaviorEntityComponentBuilder<SchedulerData, "minecraft:scheduler"> {
    /**
     * 
     * @param {SchedulerData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SchedulerData) {
        super("minecraft:scheduler", params);
    }
}