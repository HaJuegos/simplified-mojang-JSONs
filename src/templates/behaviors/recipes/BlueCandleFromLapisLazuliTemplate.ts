import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlueCandleFromLapisLazuliTemplate = createBPRecipe({
    idRecipe: "minecraft:blue_candle_from_lapis_lazuli",
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
                data: 4
            }
        ],
        unlock: [
            {
                item: "minecraft:candle"
            },
            {
                item: "minecraft:dye",
                data: 4
            }
        ],
        result: {
            item: "minecraft:blue_candle"
        }
    }
});
