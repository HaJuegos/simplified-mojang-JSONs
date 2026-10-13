import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkOakPlanksFromWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_oak_planks_from_wood",
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
                item: "minecraft:dark_oak_wood"
            }
        },
        unlock: [
            {
                item: "minecraft:dark_oak_wood"
            }
        ],
        result: {
            item: "minecraft:dark_oak_planks",
            count: 4
        }
    }
});
