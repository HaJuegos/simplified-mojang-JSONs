import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CopperBootsTemplate = createBPRecipe({
    idRecipe: "minecraft:copper_boots",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X X",
            "X X"
        ],
        key: {
            X: {
                item: "minecraft:copper_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_ingot"
            }
        ],
        result: {
            item: "minecraft:copper_boots"
        }
    }
});
