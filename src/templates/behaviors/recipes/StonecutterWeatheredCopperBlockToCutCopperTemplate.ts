import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterWeatheredCopperBlockToCutCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_weathered_copper_to_cut_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:weathered_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:weathered_copper"
            }
        ],
        result: {
            item: "minecraft:weathered_cut_copper",
            count: 4
        }
    }
});
