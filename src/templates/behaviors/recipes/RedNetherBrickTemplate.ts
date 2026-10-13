import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedNetherBrickTemplate = createBPRecipe({
    idRecipe: "minecraft:red_nether_brick",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "NW",
            "WN"
        ],
        key: {
            W: {
                item: "minecraft:nether_wart"
            },
            N: {
                item: "minecraft:netherbrick"
            }
        },
        unlock: [
            {
                item: "minecraft:nether_wart"
            }
        ],
        result: {
            item: "minecraft:red_nether_brick"
        }
    }
});
