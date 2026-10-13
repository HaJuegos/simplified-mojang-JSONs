import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TuffBrickStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:tuff_brick_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A",
            "AA",
            "AAA"
        ],
        key: {
            A: {
                item: "minecraft:tuff_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:tuff_bricks"
            }
        ],
        result: {
            item: "minecraft:tuff_brick_stairs",
            count: 4
        },
        priority: 1
    }
});
