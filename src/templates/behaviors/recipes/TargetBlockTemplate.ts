import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TargetBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:target",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " . ",
            ".#.",
            " . "
        ],
        key: {
            "#": {
                item: "minecraft:hay_block"
            },
            ".": {
                item: "minecraft:redstone"
            }
        },
        unlock: [
            {
                item: "minecraft:redstone"
            },
            {
                item: "minecraft:hay_block"
            }
        ],
        result: {
            item: "minecraft:target"
        }
    }
});
