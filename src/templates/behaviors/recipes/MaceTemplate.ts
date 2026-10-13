import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MaceTemplate = createBPRecipe({
    idRecipe: "minecraft:mace",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        key: {
            "#": {
                item: "minecraft:breeze_rod"
            },
            "*": {
                item: "minecraft:heavy_core"
            }
        },
        pattern: [
            "*",
            "#"
        ],
        unlock: [
            {
                item: "minecraft:breeze_rod"
            },
            {
                item: "minecraft:heavy_core"
            }
        ],
        result: {
            item: "minecraft:mace",
            count: 1
        }
    }
});
