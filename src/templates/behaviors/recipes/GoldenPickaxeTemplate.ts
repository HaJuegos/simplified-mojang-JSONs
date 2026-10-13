import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldenPickaxeTemplate = createBPRecipe({
    idRecipe: "minecraft:golden_pickaxe",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XXX",
            " # ",
            " # "
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:gold_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:gold_ingot"
            }
        ],
        result: {
            item: "minecraft:golden_pickaxe"
        }
    }
});
