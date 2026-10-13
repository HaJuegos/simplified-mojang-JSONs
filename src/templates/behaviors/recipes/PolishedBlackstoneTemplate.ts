import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedBlackstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_blackstone",
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
                item: "minecraft:blackstone"
            }
        },
        unlock: [
            {
                item: "minecraft:blackstone"
            }
        ],
        result: {
            item: "minecraft:polished_blackstone",
            count: 4
        }
    }
});
