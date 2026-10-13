import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChiseledDeepslateTemplate = createBPRecipe({
    idRecipe: "minecraft:chiseled_deepslate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            "#": {
                item: "minecraft:cobbled_deepslate_slab"
            }
        },
        pattern: [
            "#",
            "#"
        ],
        unlock: [
            {
                item: "minecraft:cobbled_deepslate_slab"
            }
        ],
        priority: 1,
        result: {
            item: "minecraft:chiseled_deepslate"
        },
        tags: [
            "crafting_table"
        ]
    }
});
