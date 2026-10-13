import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WarpedPlanksFromStrippedWarpedHyphaeTemplate = createBPRecipe({
    idRecipe: "minecraft:warped_planks_from_stripped_warped_hyphae",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "planks",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_warped_hyphae"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_warped_hyphae"
            }
        ],
        result: {
            item: "minecraft:warped_planks",
            count: 4
        }
    }
});
