import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrindstoneFromWarpedPlanks2Template = createBPRecipe({
    idRecipe: "minecraft:grindstone_from_warped_planks2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "deprecated"
        ],
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "grindstone"
            }
        },
        result: {
            item: "grindstone"
        }
    }
});
