import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MudBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:mud_bricks",
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
                item: "minecraft:packed_mud"
            }
        },
        unlock: [
            {
                item: "minecraft:packed_mud"
            }
        ],
        result: {
            item: "minecraft:mud_bricks",
            count: 4
        }
    }
});
