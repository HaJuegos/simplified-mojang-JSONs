import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HumidityData extends BPComponent {
    isHumid: boolean;
}

export class SetHumidity extends BehaviorBiomeComponentBulder<HumidityData, "minecraft:humidity"> {
    /**
     * 
     * @param {HumidityData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: HumidityData) {
        super("minecraft:humidity", params);
    }
}