import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WindChargeTemplate = createBPRecipe({
    idRecipe: "minecraft:wind_charge",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:breeze_rod"
            }
        ],
        unlock: [
            {
                item: "minecraft:breeze_rod"
            }
        ],
        result: {
            item: "minecraft:wind_charge",
            count: 4
        }
    }
});
