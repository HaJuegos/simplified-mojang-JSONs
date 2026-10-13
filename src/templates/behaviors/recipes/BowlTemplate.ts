import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BowlTemplate = createBPRecipe({
    idRecipe: "minecraft:Bowl_recipeId",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A A",
            " A "
        ],
        key: {
            A: {
                tag: "minecraft:planks"
            }
        },
        unlock: [
            {
                item: "minecraft:brown_mushroom"
            },
            {
                item: "minecraft:red_mushroom"
            },
            {
                item: "minecraft:mushroom_stew"
            }
        ],
        result: {
            item: "bowl",
            count: 4
        },
        priority: -1
    }
});
