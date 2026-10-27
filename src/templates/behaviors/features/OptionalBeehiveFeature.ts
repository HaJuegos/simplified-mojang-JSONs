import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const OptionalBeehiveFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.ScatterFeature,
    idFeature: "minecraft:optional_beehive_feature",
    scatter: {
        iterations: 1,
        scatterChance: `${MoLang.hasBiomeTag("bee_habitat")} ? (${MoLang.hasBiomeTag("plains")} || ${MoLang.hasBiomeTag("sunflower_plains")} ? 5.0 : (${MoLang.hasBiomeTag("flower_forest")} ? 3.0 : (${MoLang.hasBiomeTag("birch_forest")} || ${MoLang.hasBiomeTag("birch_forest_hills")} || ${MoLang.hasBiomeTag("birch_forest_mutated")} || ${MoLang.hasBiomeTag("forest")} || ${MoLang.hasBiomeTag("forest_mutated")} ? 0.035 : 0.0))) : 0.0`,
        x: 0,
        z: 0,
        y: 0,
        projectInputToFloor: false,
        placesFeature: "minecraft:beehive_search_feature"
    }
});
