import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            S: {
                item: "minecraft:polished_deepslate"
            }
        },
        pattern: [
            "SS",
            "SS"
        ],
        priority: 1,
        result: {
            count: 4,
            item: "minecraft:deepslate_bricks"
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
