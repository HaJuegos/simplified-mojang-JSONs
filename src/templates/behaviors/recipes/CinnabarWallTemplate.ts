import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CinnabarWallTemplate = createBPRecipe({
    idRecipe: "minecraft:cinnabar_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:cinnabar"
            }
        },
        unlock: [
            {
                item: "minecraft:cinnabar"
            }
        ],
        result: {
            item: "minecraft:cinnabar_wall",
            count: 6
        }
    }
});
