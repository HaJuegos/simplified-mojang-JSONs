import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSmoothStoneSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_smooth_double_stone_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:smooth_stone"
            }
        ],
        unlock: [
            {
                item: "minecraft:smooth_stone"
            }
        ],
        result: {
            item: "minecraft:smooth_stone_slab",
            count: 2
        }
    }
});
