import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSmoothQuartzSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_smooth_quartz_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:smooth_quartz"
            }
        ],
        unlock: [
            {
                item: "minecraft:smooth_quartz"
            }
        ],
        result: {
            item: "minecraft:smooth_quartz_slab",
            count: 2
        }
    }
});
