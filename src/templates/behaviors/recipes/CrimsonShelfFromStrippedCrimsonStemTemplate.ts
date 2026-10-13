import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrimsonShelfFromStrippedCrimsonStemTemplate = createBPRecipe({
    idRecipe: "minecraft:crimson_shelf_from_stripped_crimson_stem",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "   ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_crimson_stem"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_crimson_stem"
            }
        ],
        result: {
            item: "minecraft:crimson_shelf",
            count: 6
        }
    }
});
