import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterChiseledPolishedFromBlackstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_chiseled_polished_from_blackstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:blackstone"
            }
        ],
        unlock: [
            {
                item: "minecraft:blackstone"
            }
        ],
        result: {
            item: "minecraft:chiseled_polished_blackstone",
            count: 1
        }
    }
});
