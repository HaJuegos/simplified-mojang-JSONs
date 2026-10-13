import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmoothSandstoneStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:smooth_sandstone_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:smooth_sandstone"
            }
        },
        unlock: [
            {
                item: "minecraft:smooth_sandstone"
            }
        ],
        result: {
            item: "minecraft:smooth_sandstone_stairs",
            count: 4
        }
    }
});
