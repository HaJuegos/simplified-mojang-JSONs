import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface EnvironmentSensorData extends BPComponent {
    triggers: EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetEnvironmentSensor extends BehaviorEntityComponentBuilder<EnvironmentSensorData> {
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