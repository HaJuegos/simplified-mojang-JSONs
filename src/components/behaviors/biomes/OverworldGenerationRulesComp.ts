import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type ClimatesTypes = "medium" | "warm" | "lukewarm" | "cold" | "frozen";

type GenerateClimesTypes = [ClimatesTypes, number];

/**
 * 
 * @interface OverworldGenerationRulesData
 * @extends {BPComponent}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 */
interface OverworldGenerationRulesData extends BPComponent {
    generateForClimates?: GenerateClimesTypes[];
    hillsTransformation?: [string, | number][] | string[] | string;
    mutateTransformation?: string | string[];
    riverTransformation?: string | string[];
    shoreTransformation?: string | string[];
}

/**
 * 
 * @class SetOverworldGenerationRules
 * @extends {BehaviorBiomeComponentBulder<OverworldGenerationRulesData, "minecraft:overworld_generation_rules">}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class SetOverworldGenerationRules extends BehaviorBiomeComponentBulder<OverworldGenerationRulesData, "minecraft:overworld_generation_rules"> {
    /**
     * 
     * @param {OverworldGenerationRulesData} params Parametros del componente.
     * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: OverworldGenerationRulesData) {
        super("minecraft:overworld_generation_rules", params);
    }
}