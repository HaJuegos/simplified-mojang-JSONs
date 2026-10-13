import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWaxedChiseledCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:waxed_chiseled_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:waxed_cut_copper_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_cut_copper_slab"
            }
        ],
        result: {
            count: 1,
            item: "minecraft:waxed_chiseled_copper"
        }
    }
});
