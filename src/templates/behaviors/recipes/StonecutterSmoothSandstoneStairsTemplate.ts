import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSmoothSandstoneStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_smooth_sandstone_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:sandstone",
                data: 3
            }
        ],
        unlock: [
            {
                item: "minecraft:sandstone",
                data: 3
            }
        ],
        result: {
            item: "minecraft:smooth_sandstone_stairs",
            data: 0,
            count: 1
        }
    }
});
