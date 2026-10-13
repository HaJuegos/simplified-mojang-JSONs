import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WhiteDyeFromLilyOfTheValleyTemplate = createBPRecipe({
    idRecipe: "minecraft:white_dye_from_lily_of_the_valley",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "white_dye",
        ingredients: [
            {
                item: "minecraft:lily_of_the_valley"
            }
        ],
        unlock: [
            {
                item: "minecraft:lily_of_the_valley"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 19
        }
    }
});
