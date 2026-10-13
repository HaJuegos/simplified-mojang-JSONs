import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const Record5Template = createBPRecipe({
    idRecipe: "minecraft:record_5",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "AAA",
            "AAA"
        ],
        key: {
            A: {
                item: "minecraft:disc_fragment_5"
            }
        },
        unlock: [
            {
                item: "minecraft:disc_fragment_5"
            }
        ],
        result: {
            item: "minecraft:record_5",
            count: 1
        },
        priority: 1
    }
});
