import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterRedNetherBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_red_nether_brick_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:red_nether_brick"
            }
        ],
        unlock: [
            {
                item: "minecraft:red_nether_brick"
            }
        ],
        result: {
            item: "minecraft:red_nether_brick_wall",
            count: 1
        }
    }
});
