import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarStrippedWoodFromStrippedLogTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_wood_from_stripped_log",
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
                item: "minecraft:stripped_poplar_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_poplar_log"
            }
        ],
        result: {
            item: "minecraft:stripped_poplar_wood",
            count: 3
        }
    }
});
