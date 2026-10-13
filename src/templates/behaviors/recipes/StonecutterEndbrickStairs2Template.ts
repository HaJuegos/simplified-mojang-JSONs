import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterEndbrickStairs2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_endbrick_stairs2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:end_bricks",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:end_bricks",
                data: 0
            }
        ],
        result: {
            item: "minecraft:end_brick_stairs",
            data: 0,
            count: 1
        }
    }
});
