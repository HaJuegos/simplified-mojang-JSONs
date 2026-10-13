import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableOxidizedCutCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:crafting_table_oxidized_cut_copper",
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
                item: "minecraft:oxidized_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:oxidized_copper"
            }
        ],
        result: {
            item: "minecraft:oxidized_cut_copper",
            count: 4
        },
        priority: 1
    }
});
