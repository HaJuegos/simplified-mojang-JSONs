import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterStonebrickStairs2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_stonebrick_stairs2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:stone_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:stone_bricks"
            }
        ],
        result: {
            item: "minecraft:stone_brick_stairs",
            data: 0,
            count: 1
        }
    }
});
