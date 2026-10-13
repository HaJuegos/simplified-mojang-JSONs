import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterCinnabarBrickStairsFromCinnabarBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_cinnabar_brick_stairs_from_cinnabar_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:cinnabar_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:cinnabar_bricks"
            }
        ],
        result: {
            item: "minecraft:cinnabar_brick_stairs",
            count: 1
        }
    }
});
