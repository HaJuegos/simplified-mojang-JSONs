import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmoothRedSandstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:smooth_red_sandstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:red_sandstone",
                data: 0
            }
        },
        unlock: [
            {
                item: "minecraft:red_sandstone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:cut_red_sandstone",
            count: 4
        }
    }
});
