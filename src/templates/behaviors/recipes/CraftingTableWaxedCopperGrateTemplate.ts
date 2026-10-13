import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWaxedCopperGrateTemplate = createBPRecipe({
    idRecipe: "minecraft:waxed_copper_grate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " M ",
            "M M",
            " M "
        ],
        key: {
            M: {
                item: "minecraft:waxed_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_copper"
            }
        ],
        result: {
            count: 4,
            item: "minecraft:waxed_copper_grate"
        }
    }
});
