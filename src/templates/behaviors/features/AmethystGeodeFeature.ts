import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const AmethystGeodeFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.v1_13_0,
    typeFeature: FeatureListTypes.GeodeFeature,
    idFeature: "minecraft:amethyst_geode_feature",
    geode: {
        filler: "minecraft:air",
        innerLayer: "minecraft:amethyst_block",
        alternateInnerLayer: "minecraft:budding_amethyst",
        middleLayer: "minecraft:calcite",
        outerLayer: "minecraft:smooth_basalt",
        innerPlacements: [
            {
                name: "minecraft:amethyst_cluster"
            },
            {
                name: "minecraft:large_amethyst_bud"
            },
            {
                name: "minecraft:medium_amethyst_bud"
            },
            {
                name: "minecraft:small_amethyst_bud"
            }
        ],
        minOuterWallDistance: 4,
        maxOuterWallDistance: 7,
        minDistributionPoints: 3,
        maxDistributionPoints: 5,
        minPointOffset: 1,
        maxPointOffset: 3,
        maxRadius: 16,
        crackPointOffset: 2.0,
        generateCrackChance: 0.95,
        baseCrackSize: 2.0,
        noiseMultiplier: 0.025,
        usePotentialPlacementsChance: 0.35,
        useAlternateLayer0Chance: 0.083,
        placementsRequireLayer0Alternate: true,
        invalidBlocksThreshold: 1
    }
});
