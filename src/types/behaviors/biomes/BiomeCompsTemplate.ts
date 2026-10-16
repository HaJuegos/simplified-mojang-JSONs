import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";

export {
    BPBiomeFile,
    BPBiomeComponent,
};

/**
 * Tipado general para identificar un archivo biome.
 * @author HaJuegos - 15-10-2026
 */
type BPBiomeFile = Readonly<Record<string, unknown>>;

/**
 * Tipado general para identificar un componente de un archivo biome.
 * @author HaJuegos - 15-10-2026
 */
type BPBiomeComponent = BehaviorBiomeComponentBulder<any, string>;