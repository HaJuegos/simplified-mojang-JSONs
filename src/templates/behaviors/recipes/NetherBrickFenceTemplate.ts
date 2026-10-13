import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NetherBrickFenceTemplate = createBPRecipe({
    idRecipe: "minecraft:nether_brick_fence",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "W#W",
            "W#W"
        ],
        key: {
            "#": {
                item: "minecraft:netherbrick"
            },
            W: {
                item: "minecraft:nether_brick"
            }
        },
        unlock: [
            {
                item: "minecraft:nether_brick"
            }
        ],
        result: {
            item: "minecraft:nether_brick_fence",
            count: 6
        }
    }
});
