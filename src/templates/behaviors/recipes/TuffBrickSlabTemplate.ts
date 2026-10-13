import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TuffBrickSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:tuff_brick_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA"
        ],
        key: {
            A: {
                item: "minecraft:tuff_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:tuff_bricks"
            }
        ],
        result: {
            item: "minecraft:tuff_brick_slab",
            count: 6
        },
        priority: 1
    }
});
