import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterWCopperBlockToCutCopperStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_waxed_copper_to_cut_copper_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:waxed_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:waxed_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_cut_copper_stairs",
            count: 4
        }
    }
});
