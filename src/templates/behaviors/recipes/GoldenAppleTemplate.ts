import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldenAppleTemplate = createBPRecipe({
    idRecipe: "minecraft:golden_apple",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:gold_ingot"
            },
            X: {
                item: "minecraft:apple"
            }
        },
        unlock: [
            {
                item: "minecraft:gold_ingot"
            }
        ],
        result: {
            item: "minecraft:golden_apple",
            data: 0
        }
    }
});
