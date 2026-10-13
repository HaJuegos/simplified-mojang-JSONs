import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MangroveShelfFromStrippedMangroveLogTemplate = createBPRecipe({
    idRecipe: "minecraft:mangrove_shelf_from_stripped_mangrove_log",
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
                item: "minecraft:stripped_mangrove_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_mangrove_log"
            }
        ],
        result: {
            item: "minecraft:mangrove_shelf",
            count: 6
        }
    }
});
