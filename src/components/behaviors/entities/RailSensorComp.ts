import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface RailSensorData extends BPComponent {
    checkBlockTypes?: boolean;
    ejectOnActivate?: boolean;
    ejectOnDeactivate?: boolean;
    onActivate?: EntityFilter | EntityFilter[];
    onDeactivate?: EntityFilter | EntityFilter[];
    tickCommandBlockOnActivate?: boolean;
    tickCommandBlockOnDeactivate?: boolean;
}

export class SetRailSensor extends BehaviorEntityComponentBuilder<RailSensorData, "minecraft:rail_sensor"> {
    /**
     * 
     * @param {RailSensorData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: RailSensorData) {
        super("minecraft:rail_sensor", params);
    }
}