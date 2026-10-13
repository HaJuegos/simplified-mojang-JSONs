import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSlabFromPolishedBlackstoneBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_slab_from_polished_blackstone_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:polished_blackstone_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_blackstone_bricks"
            }
        ],
        result: {
            item: "minecraft:polished_blackstone_brick_slab",
            count: 2
        }
    }
});
