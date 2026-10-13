import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EndBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:end_brick_wall",
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
                item: "minecraft:end_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:end_bricks"
            }
        ],
        result: {
            item: "minecraft:end_stone_brick_wall",
            count: 6
        }
    }
});
