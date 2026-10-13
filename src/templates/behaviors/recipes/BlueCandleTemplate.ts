import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlueCandleTemplate = createBPRecipe({
    idRecipe: "minecraft:blue_candle",
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
                data: 18
            }
        ],
        unlock: [
            {
                item: "minecraft:candle"
            },
            {
                item: "minecraft:dye",
                data: 18
            }
        ],
        result: {
            item: "minecraft:blue_candle"
        }
    }
});
