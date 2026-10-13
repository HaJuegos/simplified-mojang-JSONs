import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BowlFromCrimsonPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:bowl_from_crimson_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A A",
            " A "
        ],
        key: {
            A: {
                item: "crimson_planks"
            }
        },
        result: {
            item: "bowl",
            count: 4
        },
        priority: 2
    }
});
