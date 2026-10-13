import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterWWeatheredCutCopperToCutCopperStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_waxed_weathered_cut_copper_to_cut_copper_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:waxed_weathered_cut_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:waxed_weathered_cut_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_weathered_cut_copper_stairs"
        }
    }
});
