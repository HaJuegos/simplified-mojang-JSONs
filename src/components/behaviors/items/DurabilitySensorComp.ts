import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DurabilitySensorData extends BPComponent {
    durabilityThresholds: DurabilityData[];
}

interface DurabilityData {
    durability: number;
    particleType: string;
    soundEvent: string;
}

export class SetDurabilitySensor extends BehaviorItemsComponentsBuilder<DurabilitySensorData, "minecraft:durability_sensor"> {
    /**
     * 
     * @param {DurabilitySensorData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DurabilitySensorData) {
        super("minecraft:durability_sensor", params);
    }
}