import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmithingTableFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:smithing_table_from_mangrove_planks",
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
                item: "iron_ingot"
            },
            B: {
                item: "mangrove_planks"
            }
        },
        result: {
            item: "smithing_table",
            count: 1
        },
        priority: 2
    }
});
