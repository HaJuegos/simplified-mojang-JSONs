import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedAndesiteStairs2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_andesite_stairs2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:polished_andesite"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_andesite"
            }
        ],
        result: {
            item: "minecraft:polished_andesite_stairs",
            data: 0,
            count: 1
        }
    }
});
