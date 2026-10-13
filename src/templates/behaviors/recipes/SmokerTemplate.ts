import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmokerTemplate = createBPRecipe({
    idRecipe: "minecraft:smoker",
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
                tag: "minecraft:logs"
            }
        },
        unlock: [
            {
                item: "minecraft:furnace"
            }
        ],
        result: {
            item: "minecraft:smoker"
        },
        priority: -1
    }
});
