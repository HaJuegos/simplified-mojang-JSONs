import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MossyStoneBrickStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:mossy_stone_brick_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:mossy_stone_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:mossy_stone_bricks"
            }
        ],
        result: {
            item: "minecraft:mossy_stone_brick_stairs",
            count: 4
        }
    }
});
