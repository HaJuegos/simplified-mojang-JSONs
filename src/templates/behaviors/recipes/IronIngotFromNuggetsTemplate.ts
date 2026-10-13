import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const IronIngotFromNuggetsTemplate = createBPRecipe({
    idRecipe: "minecraft:iron_ingot_from_nuggets",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "iron_ingot",
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:iron_nugget"
            }
        },
        unlock: [
            {
                item: "minecraft:iron_nugget"
            }
        ],
        result: {
            item: "minecraft:iron_ingot"
        }
    }
});
