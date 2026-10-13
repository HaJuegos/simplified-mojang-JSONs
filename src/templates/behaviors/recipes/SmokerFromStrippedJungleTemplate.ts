import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmokerFromStrippedJungleTemplate = createBPRecipe({
    idRecipe: "minecraft:smoker_from_stripped_jungle",
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
                item: "minecraft:stripped_jungle_log"
            }
        },
        result: {
            item: "minecraft:smoker"
        }
    }
});
