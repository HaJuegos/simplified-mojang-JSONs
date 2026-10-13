import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableOxidizedChiseledCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:oxidized_chiseled_copper",
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
                item: "minecraft:oxidized_cut_copper_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:oxidized_cut_copper_slab"
            }
        ],
        result: {
            count: 1,
            item: "minecraft:oxidized_chiseled_copper"
        }
    }
});
