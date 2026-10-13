import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CopperIngotFromNuggetsTemplate = createBPRecipe({
    idRecipe: "minecraft:copper_ingot_from_nuggets",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "copper_ingot",
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:copper_nugget"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_nugget"
            }
        ],
        result: {
            item: "minecraft:copper_ingot"
        }
    }
});
