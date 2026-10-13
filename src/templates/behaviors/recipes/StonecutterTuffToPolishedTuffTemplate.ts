import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterTuffToPolishedTuffTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_tuff_to_polished_tuff",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:tuff"
            }
        ],
        unlock: [
            {
                item: "minecraft:tuff"
            }
        ],
        result: {
            item: "minecraft:polished_tuff",
            count: 1
        }
    }
});
