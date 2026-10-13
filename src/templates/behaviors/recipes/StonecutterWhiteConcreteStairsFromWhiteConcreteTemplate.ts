import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterWhiteConcreteStairsFromWhiteConcreteTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_white_concrete_stairs_from_white_concrete",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:white_concrete"
            }
        ],
        unlock: [
            {
                item: "minecraft:white_concrete"
            }
        ],
        result: {
            item: "minecraft:white_concrete_stairs",
            count: 1
        }
    }
});
