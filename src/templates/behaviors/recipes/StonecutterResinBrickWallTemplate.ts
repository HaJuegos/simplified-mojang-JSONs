import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterResinBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_resin_brick_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:resin_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:resin_bricks"
            }
        ],
        result: {
            item: "minecraft:resin_brick_wall",
            count: 1
        }
    }
});
