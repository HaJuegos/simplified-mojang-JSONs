import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableChiseledCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:crafting_table_chiseled_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        key: {
            "#": {
                item: "minecraft:cut_copper_slab"
            }
        },
        pattern: [
            "#",
            "#"
        ],
        unlock: [
            {
                item: "minecraft:cut_copper_slab"
            }
        ],
        priority: 1,
        result: {
            item: "minecraft:chiseled_copper"
        }
    }
});
