import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedBasaltFromBasaltTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_basalt_from_basalt",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:basalt"
            }
        ],
        unlock: [
            {
                item: "minecraft:basalt"
            }
        ],
        result: {
            item: "minecraft:polished_basalt",
            count: 1
        }
    }
});
