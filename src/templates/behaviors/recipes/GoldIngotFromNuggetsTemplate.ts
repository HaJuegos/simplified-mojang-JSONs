import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldIngotFromNuggetsTemplate = createBPRecipe({
    idRecipe: "minecraft:gold_ingot_from_nuggets",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "gold_ingot",
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:gold_nugget"
            }
        },
        unlock: [
            {
                item: "minecraft:gold_nugget"
            }
        ],
        result: {
            item: "minecraft:gold_ingot"
        }
    }
});
