import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmokerFromStrippedWarpedStemTemplate = createBPRecipe({
    idRecipe: "minecraft:smoker_from_stripped_warped_stem",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " A ",
            "ABA",
            " A "
        ],
        key: {
            A: {
                item: "stripped_warped_stem"
            },
            B: {
                item: "furnace"
            }
        },
        result: {
            item: "smoker",
            count: 1
        },
        priority: 2
    }
});
