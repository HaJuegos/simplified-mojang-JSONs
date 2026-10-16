import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ClimateData extends BPComponent {
    downfall?: number;
    snowAccumulation?: [number, number],
    temperature?: number;
}

export class SetClimate extends BehaviorBiomeComponentBulder<ClimateData, "minecraft:climate"> {
    /**
     * 
     * @param {ClimateData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ClimateData) {
        super("minecraft:climate", params);
    }
}