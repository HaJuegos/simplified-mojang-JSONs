import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChainTemplate = createBPRecipe({
    idRecipe: "minecraft:chain",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "N",
            "G",
            "N"
        ],
        key: {
            N: {
                item: "iron_nugget"
            },
            G: {
                item: "iron_ingot"
            }
        },
        unlock: [
            {
                item: "iron_ingot"
            }
        ],
        result: {
            item: "chain",
            count: 1
        }
    }
});
