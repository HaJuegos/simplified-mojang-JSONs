import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const JukeboxTemplate = createBPRecipe({
    idRecipe: "minecraft:Jukebox_recipeId",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "ABA",
            "AAA"
        ],
        key: {
            A: {
                tag: "minecraft:planks"
            },
            B: {
                item: "diamond"
            }
        },
        unlock: [
            {
                item: "minecraft:diamond"
            }
        ],
        result: {
            item: "jukebox",
            count: 1
        },
        priority: -1
    }
});
