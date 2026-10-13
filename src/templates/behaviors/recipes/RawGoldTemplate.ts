import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RawGoldTemplate = createBPRecipe({
    idRecipe: "minecraft:raw_gold",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:raw_gold_block"
            }
        },
        unlock: [
            {
                item: "minecraft:raw_gold_block"
            }
        ],
        result: {
            item: "minecraft:raw_gold",
            count: 9
        }
    }
});
