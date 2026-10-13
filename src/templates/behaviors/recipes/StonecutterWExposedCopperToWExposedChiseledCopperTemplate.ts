import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterWExposedCopperToWExposedChiseledCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_waxed_exposed_copper_to_waxed_exposed_chiseled_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:waxed_exposed_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:waxed_exposed_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_exposed_chiseled_copper",
            count: 4
        }
    }
});
