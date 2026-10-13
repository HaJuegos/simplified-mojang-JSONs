import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedGraniteTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_granite",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:granite"
            }
        ],
        unlock: [
            {
                item: "minecraft:granite"
            }
        ],
        result: {
            item: "minecraft:polished_granite",
            count: 1
        }
    }
});
