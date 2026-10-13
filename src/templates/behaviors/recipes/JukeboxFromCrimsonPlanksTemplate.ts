import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const JukeboxFromCrimsonPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:jukebox_from_crimson_planks",
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
                item: "crimson_planks"
            },
            B: {
                item: "diamond"
            }
        },
        result: {
            item: "jukebox",
            count: 1
        },
        priority: 2
    }
});
