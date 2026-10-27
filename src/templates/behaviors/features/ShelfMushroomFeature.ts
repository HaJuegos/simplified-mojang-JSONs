import { createBPFeature } from "../../../builders/behaviors/features/FeatureTemplateBuilder";
import { VanillaFormatVersionsFeature, FeatureListTypes } from "../../../types/behaviors/features/FeatureTemplate";

/**
 * Plantilla vanilla del feature para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 26-10-2026
 */
export const ShelfMushroomFeature = createBPFeature({
    formatVersion: VanillaFormatVersionsFeature.MostRecent,
    typeFeature: FeatureListTypes.HorizontalTreeDecorationFeature,
    idFeature: "minecraft:shelf_mushroom_feature",
    horizontalTreeDecoration: {
        placesBlock: "minecraft:shelf_mushroom",
        barkSideOnly: true,
        allowAdjacent: false
    }
});
