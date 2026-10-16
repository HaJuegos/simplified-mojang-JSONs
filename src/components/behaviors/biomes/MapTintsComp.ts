import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MapTintsData extends BPComponent {
    foliage: string;
    grass: {
        type?: "tint" | "noise";
        tint?: string;
    };
}

export class SetMapTints extends BehaviorBiomeComponentBulder<MapTintsData, "minecraft:map_tints"> {
    /**
     * 
     * @param {MapTintsData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MapTintsData) {
        super("minecraft:map_tints", params);
    }
}