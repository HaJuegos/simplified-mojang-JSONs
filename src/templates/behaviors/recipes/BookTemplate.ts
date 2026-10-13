import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BookTemplate = createBPRecipe({
    idRecipe: "minecraft:book",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:paper",
                data: 0
            },
            {
                item: "minecraft:paper",
                data: 0
            },
            {
                item: "minecraft:paper",
                data: 0
            },
            {
                item: "minecraft:leather",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:paper",
                data: 0
            }
        ],
        result: {
            item: "minecraft:book",
            count: 1
        }
    }
});
