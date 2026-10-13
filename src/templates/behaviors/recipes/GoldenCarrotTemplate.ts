import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldenCarrotTemplate = createBPRecipe({
    idRecipe: "minecraft:golden_carrot",
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
                item: "minecraft:gold_nugget"
            },
            X: {
                item: "minecraft:carrot"
            }
        },
        unlock: [
            {
                item: "minecraft:gold_nugget"
            }
        ],
        result: {
            item: "minecraft:golden_carrot"
        }
    }
});
