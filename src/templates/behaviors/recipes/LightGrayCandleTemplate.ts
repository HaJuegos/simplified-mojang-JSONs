import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightGrayCandleTemplate = createBPRecipe({
    idRecipe: "minecraft:light_gray_candle",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "candle",
        ingredients: [
            {
                item: "minecraft:candle"
            },
            {
                item: "minecraft:dye",
                data: 7
            }
        ],
        unlock: [
            {
                item: "minecraft:candle"
            },
            {
                item: "minecraft:dye",
                data: 7
            }
        ],
        result: {
            item: "minecraft:light_gray_candle"
        }
    }
});
