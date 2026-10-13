import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedDeepslateStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_deepslate_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            "#": {
                item: "minecraft:polished_deepslate"
            }
        },
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        priority: 1,
        result: {
            count: 4,
            item: "minecraft:polished_deepslate_stairs"
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
