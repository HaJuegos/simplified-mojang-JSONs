import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface EntitySensorData extends BPComponent {
    subsensors: SubsensorsTypes[];
}

interface SubsensorsTypes {
    cooldown: number,
    event: string,
    eventFilters: EntityFilter | EntityFilter[],
    maximumCount: number,
    minimumCount: number,
    range: [number, number],
    requireAll: boolean,
    sensorRange: number,
    yOffset: number;
}

export class SetEntitySensor extends BehaviorEntityComponentBuilder<EntitySensorData> {
    /**
     * 
     * @param {EntitySensorData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EntitySensorData) {
        super("minecraft:entity_sensor", params);
    }
}