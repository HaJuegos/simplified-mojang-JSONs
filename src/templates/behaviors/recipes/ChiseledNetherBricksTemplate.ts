import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChiseledNetherBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:chiseled_nether_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:nether_brick_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:nether_brick_slab"
            }
        ],
        result: {
            item: "minecraft:chiseled_nether_bricks"
        }
    }
});
