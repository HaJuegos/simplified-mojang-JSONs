import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CherryPlanksFromWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:cherry_planks_from_wood",
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
                item: "minecraft:cherry_wood"
            }
        },
        unlock: [
            {
                item: "minecraft:cherry_wood"
            }
        ],
        result: {
            item: "minecraft:cherry_planks",
            count: 4
        }
    }
});
