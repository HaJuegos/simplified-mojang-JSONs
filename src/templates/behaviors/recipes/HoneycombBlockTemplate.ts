import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const HoneycombBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:honeycomb_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XX",
            "XX"
        ],
        key: {
            X: {
                item: "minecraft:honeycomb"
            }
        },
        unlock: [
            {
                item: "minecraft:honeycomb"
            }
        ],
        result: [
            {
                item: "minecraft:honeycomb_block"
            }
        ]
    }
});
