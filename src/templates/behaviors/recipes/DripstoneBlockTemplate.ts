import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DripstoneBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:dripstone_block",
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
                item: "minecraft:pointed_dripstone"
            }
        },
        unlock: [
            {
                item: "minecraft:pointed_dripstone"
            }
        ],
        result: {
            item: "minecraft:dripstone_block",
            count: 1
        }
    }
});
