import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterTuffBricksToTuffBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_tuff_bricks_to_tuff_brick_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:tuff_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:tuff_bricks"
            }
        ],
        result: {
            item: "minecraft:tuff_brick_wall",
            count: 1
        }
    }
});
