import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WoodenAxeFromWarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:wooden_axe_from_warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "AB",
            " B"
        ],
        key: {
            A: {
                item: "warped_planks"
            },
            B: {
                item: "stick"
            }
        },
        result: {
            item: "wooden_axe",
            count: 1
        },
        priority: 2
    }
});
