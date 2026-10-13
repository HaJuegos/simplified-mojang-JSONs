import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldenChestplateTemplate = createBPRecipe({
    idRecipe: "minecraft:golden_chestplate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X X",
            "XXX",
            "XXX"
        ],
        key: {
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
            item: "minecraft:golden_chestplate"
        }
    }
});
