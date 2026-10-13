import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PumpkinSeedsTemplate = createBPRecipe({
    idRecipe: "minecraft:pumpkin_seeds",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "M"
        ],
        key: {
            M: {
                item: "minecraft:pumpkin"
            }
        },
        unlock: [
            {
                item: "minecraft:pumpkin"
            }
        ],
        result: {
            item: "minecraft:pumpkin_seeds",
            count: 4
        }
    }
});
