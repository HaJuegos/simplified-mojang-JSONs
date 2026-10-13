import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterRedSandstoneStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_red_sandstone_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:red_sandstone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:red_sandstone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:red_sandstone_stairs",
            data: 0,
            count: 1
        }
    }
});
