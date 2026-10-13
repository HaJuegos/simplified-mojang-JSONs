import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CinnabarBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:cinnabar_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:polished_cinnabar"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_cinnabar"
            }
        ],
        result: {
            item: "minecraft:cinnabar_bricks",
            count: 4
        }
    }
});
