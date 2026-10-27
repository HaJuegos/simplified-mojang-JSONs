import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const SulfurSpringTuffFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_21_40,
    typeFeature: FeatureListTypes.SingleBlockFeature,
    idFeature: "minecraft:sulfur_spring_tuff_feature",
    singleBlock: {
        placesBlock: [
            {
                block: "minecraft:tuff",
                weight: 1
            }
        ],
        mayReplace: [
            {
                tags: MoLang.anyTag("dirt", "sand", "gravel")
            },
            "minecraft:stone",
            "minecraft:granite",
            "minecraft:diorite",
            "minecraft:andesite",
            "minecraft:tuff",
            "minecraft:deepslate",
            "minecraft:calcite",
            "minecraft:sandstone",
            "minecraft:red_sandstone",
            "minecraft:hardened_clay",
            "minecraft:brown_terracotta",
            "minecraft:orange_terracotta",
            "minecraft:light_gray_terracotta",
            "minecraft:red_terracotta",
            "minecraft:white_terracotta",
            "minecraft:yellow_terracotta"
        ],
        mayAttachTo: {
            minSidesMustAttach: 1,
            top: "minecraft:air"
        },
        enforcePlacementRules: false,
        enforceSurvivabilityRules: false
    }
});
