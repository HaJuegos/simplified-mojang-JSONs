import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableDefaultTemplate = createBPRecipe({
    idRecipe: "minecraft:WorkBench_recipeId_from_oak",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "AA"
        ],
        key: {
            A: {
                item: "minecraft:oak_planks"
            }
        },
        unlock: {
            context: "AlwaysUnlocked"
        },
        result: {
            item: "crafting_table"
        },
        priority: 1
    }
});
