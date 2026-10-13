import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DiamondSwordTemplate = createBPRecipe({
    idRecipe: "minecraft:diamond_sword",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "X",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:diamond"
            }
        },
        unlock: [
            {
                item: "minecraft:diamond"
            }
        ],
        result: {
            item: "minecraft:diamond_sword"
        }
    }
});
