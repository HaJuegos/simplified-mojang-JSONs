import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedNetherBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:red_nether_brick_wall",
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
                item: "minecraft:red_nether_brick"
            }
        },
        unlock: [
            {
                item: "minecraft:red_nether_brick"
            }
        ],
        result: {
            item: "minecraft:red_nether_brick_wall",
            count: 6
        }
    }
});
