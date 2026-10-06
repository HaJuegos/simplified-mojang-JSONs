import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface TargetNearbySensorData extends BPComponent {
    mustSee?: boolean;
    insideRange?: number;
    onInsideRange?: EntityFilterTrigger | EntityFilterTrigger[];
    onOutsideRange?: EntityFilterTrigger | EntityFilterTrigger[];
    onVisionLostInsideRange?: EntityFilterTrigger | EntityFilterTrigger[];
    outsideRange?: number;
}

export class SetTargetNearbySensor extends BehaviorEntityComponentBuilder<TargetNearbySensorData, "minecraft:target_nearby_sensor"> {
    /**
     * 
     * @param {TargetNearbySensorData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: TargetNearbySensorData) {
        super("minecraft:target_nearby_sensor", params);
    }
}