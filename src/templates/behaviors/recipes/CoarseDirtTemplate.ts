import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CoarseDirtTemplate = createBPRecipe({
    idRecipe: "minecraft:coarse_dirt",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "DG",
            "GD"
        ],
        key: {
            D: {
                item: "minecraft:dirt",
                data: 0
            },
            G: {
                item: "minecraft:gravel"
            }
        },
        unlock: [
            {
                item: "minecraft:gravel"
            }
        ],
        result: {
            item: "minecraft:coarse_dirt",
            count: 4
        }
    }
});
