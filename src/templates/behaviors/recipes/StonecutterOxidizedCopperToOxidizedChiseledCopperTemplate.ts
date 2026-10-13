import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterOxidizedCopperToOxidizedChiseledCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_oxidized_copper_to_oxidized_chiseled_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:oxidized_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:oxidized_copper"
            }
        ],
        result: {
            item: "minecraft:oxidized_chiseled_copper",
            count: 4
        }
    }
});
