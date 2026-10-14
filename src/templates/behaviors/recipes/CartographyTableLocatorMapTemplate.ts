import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CartographyTableLocatorMapTemplate = createBPRecipe({
    idRecipe: "minecraft:cartography_table_locator_map",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "cartography_table"
        ],
        ingredients: [
            {
                item: "minecraft:paper"
            },
            {
                item: "minecraft:compass"
            }
        ],
        unlock: [
            {
                item: "minecraft:compass"
            }
        ],
        result: {
            item: "minecraft:emptymap",
            data: 2
        }
    }
});
