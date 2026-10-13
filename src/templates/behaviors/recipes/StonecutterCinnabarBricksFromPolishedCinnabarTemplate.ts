import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterCinnabarBricksFromPolishedCinnabarTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_cinnabar_bricks_from_polished_cinnabar",
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
            item: "minecraft:cinnabar_bricks",
            count: 1
        }
    }
});
