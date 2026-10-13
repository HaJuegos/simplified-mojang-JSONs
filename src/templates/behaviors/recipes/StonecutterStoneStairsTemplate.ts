import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterStoneStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_stone_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 6,
        ingredients: [
            {
                item: "minecraft:stone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:stone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:normal_stone_stairs",
            data: 0,
            count: 1
        }
    }
});
