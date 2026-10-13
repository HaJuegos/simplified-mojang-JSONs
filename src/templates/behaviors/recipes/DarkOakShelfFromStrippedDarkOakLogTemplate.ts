import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkOakShelfFromStrippedDarkOakLogTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_oak_shelf_from_stripped_dark_oak_log",
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
                item: "minecraft:stripped_dark_oak_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_dark_oak_log"
            }
        ],
        result: {
            item: "minecraft:dark_oak_shelf",
            count: 6
        }
    }
});
