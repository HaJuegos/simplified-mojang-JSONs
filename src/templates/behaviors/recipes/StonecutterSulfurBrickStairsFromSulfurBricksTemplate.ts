import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSulfurBrickStairsFromSulfurBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_sulfur_brick_stairs_from_sulfur_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:sulfur_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:sulfur_bricks"
            }
        ],
        result: {
            item: "minecraft:sulfur_brick_stairs",
            count: 1
        }
    }
});
