import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSmoothSandstoneSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_smooth_sanddouble_stone_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:smooth_sandstone"
            }
        ],
        unlock: [
            {
                item: "minecraft:smooth_sandstone"
            }
        ],
        result: {
            item: "minecraft:smooth_sandstone_slab",
            count: 2
        }
    }
});
