import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrimsonPlanksFromStrippedLogTemplate = createBPRecipe({
    idRecipe: "minecraft:crimson_planks_from_stripped_log",
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
                item: "minecraft:stripped_crimson_stem"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_crimson_stem"
            }
        ],
        result: {
            item: "minecraft:crimson_planks",
            count: 4
        }
    }
});
