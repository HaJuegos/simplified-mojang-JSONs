import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedDioriteStairs2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_diorite_stairs2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:polished_diorite"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_diorite"
            }
        ],
        result: {
            item: "minecraft:polished_diorite_stairs",
            data: 0,
            count: 1
        }
    }
});
