import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterBrickSlabFromPolishedBlackstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_brick_slab_from_polished_blackstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:polished_blackstone"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_blackstone"
            }
        ],
        result: {
            item: "minecraft:polished_blackstone_brick_slab",
            count: 2
        }
    }
});
