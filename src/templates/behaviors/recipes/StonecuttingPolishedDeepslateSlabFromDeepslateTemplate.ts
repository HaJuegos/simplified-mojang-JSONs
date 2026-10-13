import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecuttingPolishedDeepslateSlabFromDeepslateTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutting_polished_deepslate_slab_from_deepslate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:deepslate"
            }
        ],
        unlock: [
            {
                item: "minecraft:deepslate"
            }
        ],
        result: {
            item: "minecraft:polished_deepslate_slab",
            count: 2
        }
    }
});
