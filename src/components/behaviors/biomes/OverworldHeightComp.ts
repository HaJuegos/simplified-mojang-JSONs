import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type NoiseTypes = "default" | "default_mutated" | "river" | "ocean" | "deep_ocean" | "lowlands" | "taiga" | "mountains" | "highlands" | "extreme" | "less_extreme" | "beach" | "stone_beach" | "mushroom" | "swamp";

/**
 * 
 * @interface OverworldHeightData
 * @extends {BPComponent}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 */
interface OverworldHeightData extends BPComponent {
    noiseParams?: [number, number];
    noiseType?: NoiseTypes;
}

/**
 * 
 * @class SetOverworldHeight
 * @extends {BehaviorBiomeComponentBulder<OverworldHeightData, "minecraft:overworld_height">}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class SetOverworldHeight extends BehaviorBiomeComponentBulder<OverworldHeightData, "minecraft:overworld_height"> {
    /**
     * 
     * @param {OverworldHeightData} params Parametros del componente.
     * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: OverworldHeightData) {
        super("minecraft:overworld_height", params);
    }
}