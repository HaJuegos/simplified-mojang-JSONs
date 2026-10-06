import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HealthData extends BPComponent {
    max?: number,
    min?: number,
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMax?: number;
        rangeMin?: number;
    };
}

export class SetHealth extends BehaviorEntityComponentBuilder<HealthData, "minecraft:health"> {
    /**
     * 
     * @param {HealthData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: HealthData) {
        super("minecraft:health", params);
    }
}