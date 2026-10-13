import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const JunglePlanksFromStrippedTemplate = createBPRecipe({
    idRecipe: "minecraft:jungle_planks_from_stripped",
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
                item: "minecraft:stripped_jungle_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_jungle_log"
            }
        ],
        result: {
            item: "minecraft:jungle_planks",
            count: 4
        }
    }
});
