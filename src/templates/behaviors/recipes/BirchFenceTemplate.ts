import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BirchFenceTemplate = createBPRecipe({
    idRecipe: "minecraft:birch_fence",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "W#W",
            "W#W"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            W: {
                item: "minecraft:birch_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:birch_planks"
            }
        ],
        result: {
            item: "minecraft:birch_fence",
            count: 3
        }
    }
});
