import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NetherBrickTemplate = createBPRecipe({
    idRecipe: "minecraft:nether_brick",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "NN",
            "NN"
        ],
        key: {
            N: {
                item: "minecraft:netherbrick"
            }
        },
        unlock: [
            {
                item: "minecraft:netherbrick"
            }
        ],
        result: {
            item: "minecraft:nether_brick"
        }
    }
});
