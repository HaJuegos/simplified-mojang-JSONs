import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWaxedCopperBulbTemplate = createBPRecipe({
    idRecipe: "minecraft:waxed_copper_bulb",
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
                item: "minecraft:waxed_copper"
            },
            B: {
                item: "minecraft:blaze_rod"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_copper_bulb",
            count: 4
        }
    }
});
