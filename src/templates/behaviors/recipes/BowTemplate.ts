import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BowTemplate = createBPRecipe({
    idRecipe: "minecraft:bow",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " #X",
            "# X",
            " #X"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:string"
            }
        },
        unlock: [
            {
                item: "minecraft:string"
            }
        ],
        result: {
            item: "minecraft:bow"
        }
    }
});
