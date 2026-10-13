import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FletchingTableTemplate = createBPRecipe({
    idRecipe: "minecraft:fletching_table",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "||",
            "##",
            "##"
        ],
        key: {
            "|": {
                item: "minecraft:flint"
            },
            "#": {
                tag: "minecraft:planks"
            }
        },
        unlock: [
            {
                item: "minecraft:flint"
            }
        ],
        // TODO: Se esperaba un texto y llego una lista.
        result: [
            {
                item: "minecraft:fletching_table"
            }
        ],
        priority: -1
    }
});
