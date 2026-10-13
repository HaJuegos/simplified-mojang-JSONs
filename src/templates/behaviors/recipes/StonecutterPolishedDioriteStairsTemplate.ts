import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedDioriteStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_diorite_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 5,
        ingredients: [
            {
                item: "minecraft:diorite"
            }
        ],
        unlock: [
            {
                item: "minecraft:diorite"
            }
        ],
        result: {
            item: "minecraft:polished_diorite_stairs",
            data: 0,
            count: 1
        }
    }
});
