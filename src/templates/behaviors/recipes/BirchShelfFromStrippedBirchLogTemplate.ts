import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BirchShelfFromStrippedBirchLogTemplate = createBPRecipe({
    idRecipe: "minecraft:birch_shelf_from_stripped_birch_log",
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
                item: "minecraft:stripped_birch_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_birch_log"
            }
        ],
        result: {
            item: "minecraft:birch_shelf",
            count: 6
        }
    }
});
