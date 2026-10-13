import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CandleTemplate = createBPRecipe({
    idRecipe: "minecraft:candle",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "candle",
        pattern: [
            "S",
            "H"
        ],
        key: {
            H: {
                item: "minecraft:honeycomb"
            },
            S: {
                item: "minecraft:string"
            }
        },
        unlock: [
            {
                item: "minecraft:string"
            },
            {
                item: "minecraft:honeycomb"
            }
        ],
        result: {
            item: "minecraft:candle",
            count: 1
        },
        priority: 1
    }
});
