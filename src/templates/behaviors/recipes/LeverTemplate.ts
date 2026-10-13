import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LeverTemplate = createBPRecipe({
    idRecipe: "minecraft:lever",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:cobblestone"
            },
            X: {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:cobblestone"
            }
        ],
        result: {
            item: "minecraft:lever"
        }
    }
});
