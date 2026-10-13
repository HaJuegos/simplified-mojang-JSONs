import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DaylightDetectorTemplate = createBPRecipe({
    idRecipe: "minecraft:DaylightDetector_recipeId",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "BBB",
            "CCC"
        ],
        key: {
            A: {
                item: "glass"
            },
            B: {
                item: "quartz"
            },
            C: {
                tag: "minecraft:wooden_slabs"
            }
        },
        unlock: [
            {
                item: "quartz"
            }
        ],
        result: {
            item: "daylight_detector",
            count: 1
        },
        priority: -1
    }
});
