import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LoomFromWarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:loom_from_warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "BB"
        ],
        key: {
            A: {
                item: "string"
            },
            B: {
                item: "warped_planks"
            }
        },
        result: {
            item: "loom",
            count: 1
        },
        priority: 2
    }
});
