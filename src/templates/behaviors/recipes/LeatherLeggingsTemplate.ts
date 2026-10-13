import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LeatherLeggingsTemplate = createBPRecipe({
    idRecipe: "minecraft:leather_leggings",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XXX",
            "X X",
            "X X"
        ],
        key: {
            X: {
                item: "minecraft:leather"
            }
        },
        unlock: [
            {
                item: "minecraft:leather"
            }
        ],
        result: {
            item: "minecraft:leather_leggings"
        }
    }
});
