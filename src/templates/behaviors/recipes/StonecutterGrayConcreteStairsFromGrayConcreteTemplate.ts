import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterGrayConcreteStairsFromGrayConcreteTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_gray_concrete_stairs_from_gray_concrete",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:gray_concrete"
            }
        ],
        unlock: [
            {
                item: "minecraft:gray_concrete"
            }
        ],
        result: {
            item: "minecraft:gray_concrete_stairs",
            count: 1
        }
    }
});
