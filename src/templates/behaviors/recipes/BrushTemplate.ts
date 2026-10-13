import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrushTemplate = createBPRecipe({
    idRecipe: "minecraft:brush",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "#",
            "|"
        ],
        key: {
            X: {
                item: "minecraft:feather"
            },
            "#": {
                item: "minecraft:copper_ingot"
            },
            "|": {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_ingot"
            }
        ],
        result: {
            item: "minecraft:brush",
            count: 1
        }
    }
});
