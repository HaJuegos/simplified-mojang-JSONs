import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmokerFromLog2Template = createBPRecipe({
    idRecipe: "minecraft:smoker_from_log2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " # ",
            "#F#",
            " # "
        ],
        key: {
            F: {
                item: "minecraft:furnace"
            },
            "#": {
                item: "minecraft:log2"
            }
        },
        result: {
            item: "minecraft:smoker"
        }
    }
});
