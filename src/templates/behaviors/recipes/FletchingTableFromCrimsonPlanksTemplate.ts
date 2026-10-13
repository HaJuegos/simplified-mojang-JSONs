import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FletchingTableFromCrimsonPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:fletching_table_from_crimson_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "BB",
            "BB"
        ],
        key: {
            A: {
                item: "flint"
            },
            B: {
                item: "crimson_planks"
            }
        },
        result: {
            item: "fletching_table",
            count: 1
        },
        priority: 2
    }
});
