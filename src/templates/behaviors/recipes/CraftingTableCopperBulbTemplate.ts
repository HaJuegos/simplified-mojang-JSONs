import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableCopperBulbTemplate = createBPRecipe({
    idRecipe: "minecraft:copper_bulb",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " # ",
            "#B#",
            " R "
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:copper_block"
            },
            B: {
                item: "minecraft:blaze_rod"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_block"
            }
        ],
        result: {
            item: "minecraft:copper_bulb",
            count: 4
        }
    }
});
