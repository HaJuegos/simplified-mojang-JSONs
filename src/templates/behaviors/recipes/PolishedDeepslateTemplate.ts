import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedDeepslateTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_deepslate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            S: {
                item: "minecraft:cobbled_deepslate"
            }
        },
        pattern: [
            "SS",
            "SS"
        ],
        priority: 1,
        result: {
            count: 4,
            item: "minecraft:polished_deepslate"
        },
        unlock: [
            {
                item: "minecraft:cobbled_deepslate"
            }
        ],
        tags: [
            "crafting_table"
        ]
    }
});
