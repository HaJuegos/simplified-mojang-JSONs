import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CartographyTableMapTemplate = createBPRecipe({
    idRecipe: "minecraft:cartography_table_map",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        // TODO: [0] El valor 'cartography_table' no existe en el tipado (validos: crafting_table, stonecutter).
        tags: [
            "cartography_table"
        ],
        ingredients: [
            {
                item: "minecraft:paper"
            }
        ],
        unlock: [
            {
                item: "minecraft:paper"
            }
        ],
        result: {
            item: "minecraft:emptymap",
            data: 0
        }
    }
});
