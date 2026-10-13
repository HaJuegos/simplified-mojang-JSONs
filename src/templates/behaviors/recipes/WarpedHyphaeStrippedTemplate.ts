import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WarpedHyphaeStrippedTemplate = createBPRecipe({
    idRecipe: "minecraft:stripped_warped_hyphae",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wood",
        pattern: [
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_warped_stem"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_warped_stem"
            }
        ],
        result: {
            item: "minecraft:stripped_warped_hyphae",
            count: 3
        }
    }
});
