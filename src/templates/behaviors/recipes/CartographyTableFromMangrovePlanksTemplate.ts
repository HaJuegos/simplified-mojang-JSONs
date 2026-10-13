import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CartographyTableFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:cartography_table_from_mangrove_planks",
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
                item: "paper"
            },
            B: {
                item: "mangrove_planks"
            }
        },
        result: {
            item: "cartography_table",
            count: 1
        },
        priority: 2
    }
});
