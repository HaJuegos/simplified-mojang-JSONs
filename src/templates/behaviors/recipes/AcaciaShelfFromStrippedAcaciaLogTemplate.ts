import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const AcaciaShelfFromStrippedAcaciaLogTemplate = createBPRecipe({
    idRecipe: "minecraft:acacia_shelf_from_stripped_acacia_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "   ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_acacia_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_acacia_log"
            }
        ],
        result: {
            item: "minecraft:acacia_shelf",
            count: 6
        }
    }
});
