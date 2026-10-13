import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "planks",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:warped_stem"
            }
        },
        unlock: [
            {
                item: "minecraft:warped_stem"
            }
        ],
        result: {
            item: "minecraft:warped_planks",
            count: 4
        }
    }
});
