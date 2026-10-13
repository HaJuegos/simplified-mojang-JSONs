import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StickFromWarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:stick_from_warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A",
            "A"
        ],
        key: {
            A: {
                item: "warped_planks"
            }
        },
        result: {
            item: "stick",
            count: 4
        },
        priority: 2
    }
});
