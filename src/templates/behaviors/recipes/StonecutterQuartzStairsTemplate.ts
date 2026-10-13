import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterQuartzStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_quartz_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:quartz_block",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:quartz_block",
                data: 0
            }
        ],
        result: {
            item: "minecraft:quartz_stairs",
            data: 0,
            count: 1
        }
    }
});
