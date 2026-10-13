import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MangrovePlanksFromStrippedWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:mangrove_planks_from_stripped_wood",
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
                item: "minecraft:stripped_mangrove_wood"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_mangrove_wood"
            }
        ],
        result: {
            item: "minecraft:mangrove_planks",
            count: 4
        }
    }
});
