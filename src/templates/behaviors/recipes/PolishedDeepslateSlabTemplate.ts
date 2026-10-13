import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedDeepslateSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_deepslate_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            "#": {
                item: "minecraft:polished_deepslate"
            }
        },
        pattern: [
            "###"
        ],
        priority: 1,
        result: {
            count: 6,
            item: "minecraft:polished_deepslate_slab"
        },
        unlock: [
            {
                item: "minecraft:polished_deepslate"
            }
        ],
        tags: [
            "crafting_table"
        ]
    }
});
