import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarWoodFromLogTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_wood_from_log",
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
                item: "minecraft:poplar_log"
            }
        },
        unlock: [
            {
                item: "minecraft:poplar_log"
            }
        ],
        result: {
            item: "minecraft:poplar_wood",
            count: 3
        }
    }
});
