import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CartographyTableTemplate = createBPRecipe({
    idRecipe: "minecraft:cartography_table",
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
                item: "minecraft:paper"
            },
            "#": {
                tag: "minecraft:planks"
            }
        },
        unlock: [
            {
                item: "minecraft:paper"
            }
        ],
        result: {
            item: "minecraft:cartography_table"
        },
        priority: -1
    }
});
