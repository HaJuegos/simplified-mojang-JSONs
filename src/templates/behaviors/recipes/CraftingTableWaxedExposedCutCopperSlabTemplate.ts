import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWaxedExposedCutCopperSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:crafting_table_waxed_exposed_cut_copper_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA"
        ],
        key: {
            A: {
                item: "minecraft:waxed_exposed_cut_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_exposed_cut_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_exposed_cut_copper_slab",
            count: 6
        },
        priority: 1
    }
});
