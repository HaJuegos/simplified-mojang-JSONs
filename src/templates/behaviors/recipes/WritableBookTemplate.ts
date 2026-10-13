import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WritableBookTemplate = createBPRecipe({
    idRecipe: "minecraft:writable_book",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:book"
            },
            {
                item: "minecraft:dye",
                data: 0
            },
            {
                item: "minecraft:feather"
            }
        ],
        unlock: [
            {
                item: "minecraft:book"
            }
        ],
        result: {
            item: "minecraft:writable_book"
        }
    }
});
