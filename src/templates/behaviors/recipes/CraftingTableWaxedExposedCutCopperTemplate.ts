import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWaxedExposedCutCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:crafting_table_waxed_exposed_cut_copper",
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
                item: "minecraft:waxed_exposed_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_exposed_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_exposed_cut_copper",
            count: 4
        },
        priority: 1
    }
});
