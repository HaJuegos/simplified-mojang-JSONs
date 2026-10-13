import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedTuffToPolishedTuffWallTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_tuff_to_polished_tuff_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:polished_tuff"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_tuff"
            }
        ],
        result: {
            item: "minecraft:polished_tuff_wall",
            count: 1
        }
    }
});
