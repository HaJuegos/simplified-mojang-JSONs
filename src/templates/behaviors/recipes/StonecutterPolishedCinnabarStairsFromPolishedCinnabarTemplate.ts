import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedCinnabarStairsFromPolishedCinnabarTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_cinnabar_stairs_from_polished_cinnabar",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:polished_cinnabar"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_cinnabar"
            }
        ],
        result: {
            item: "minecraft:polished_cinnabar_stairs",
            count: 1
        }
    }
});
