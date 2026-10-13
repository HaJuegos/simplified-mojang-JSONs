import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarPlanksFromStrippedLogTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_planks_from_stripped_log",
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
                item: "minecraft:stripped_poplar_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_poplar_log"
            }
        ],
        result: {
            item: "minecraft:poplar_planks",
            count: 4
        }
    }
});
