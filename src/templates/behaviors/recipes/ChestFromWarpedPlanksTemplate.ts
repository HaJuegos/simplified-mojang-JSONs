import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChestFromWarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:chest_from_warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "A A",
            "AAA"
        ],
        key: {
            A: {
                item: "warped_planks"
            }
        },
        result: {
            item: "chest",
            count: 1
        },
        priority: 2
    }
});
