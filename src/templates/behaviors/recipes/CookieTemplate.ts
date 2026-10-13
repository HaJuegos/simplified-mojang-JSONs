import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CookieTemplate = createBPRecipe({
    idRecipe: "minecraft:cookie",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#X#"
        ],
        key: {
            "#": {
                item: "minecraft:wheat"
            },
            X: {
                item: "minecraft:dye",
                data: 3
            }
        },
        unlock: [
            {
                item: "minecraft:dye",
                data: 3
            }
        ],
        result: {
            item: "minecraft:cookie",
            count: 8
        }
    }
});
