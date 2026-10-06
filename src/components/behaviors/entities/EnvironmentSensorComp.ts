import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface EnvironmentSensorData extends BPComponent {
    triggers: EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetEnvironmentSensor extends BehaviorEntityComponentBuilder<EnvironmentSensorData, "minecraft:environment_sensor"> {
    /**
     * 
     * @param {EnvironmentSensorData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EnvironmentSensorData) {
        super("minecraft:environment_sensor", params);
    }
}