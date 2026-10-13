import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSulfurBrickSlabFromPolishedSulfurTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_sulfur_brick_slab_from_polished_sulfur",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:polished_sulfur"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_sulfur"
            }
        ],
        result: {
            item: "minecraft:sulfur_brick_slab",
            count: 2
        }
    }
});
