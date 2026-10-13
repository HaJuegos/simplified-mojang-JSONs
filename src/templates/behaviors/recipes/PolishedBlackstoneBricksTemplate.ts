import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedBlackstoneBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_blackstone_bricks",
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
                item: "minecraft:polished_blackstone"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_blackstone"
            }
        ],
        result: {
            item: "minecraft:polished_blackstone_bricks",
            count: 4
        }
    }
});
