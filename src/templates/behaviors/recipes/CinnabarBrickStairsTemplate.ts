import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CinnabarBrickStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:cinnabar_brick_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "##",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:cinnabar_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:cinnabar_bricks"
            }
        ],
        result: {
            item: "minecraft:cinnabar_brick_stairs",
            count: 4
        }
    }
});
