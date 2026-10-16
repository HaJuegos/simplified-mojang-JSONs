import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ReplaceBiomesData extends BPComponent {
    replacements: ReplacementsTypes[];
}

interface ReplacementsTypes {
    dimension: "minecraft:nether" | "minecraft:overworld";
    amount: number;
    noiseFrequencyScale: number;
    targets: string[];
}

export class SetReplaceBiomes extends BehaviorBiomeComponentBulder<ReplaceBiomesData, "minecraft:replace_biomes"> {
    /**
     * 
     * @param {ReplaceBiomesData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ReplaceBiomesData) {
        super("minecraft:replace_biomes", params);
    }
}