import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedCinnabarWallTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_cinnabar_wall",
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
                item: "minecraft:polished_cinnabar"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_cinnabar"
            }
        ],
        result: {
            item: "minecraft:polished_cinnabar_wall",
            count: 6
        }
    }
});
