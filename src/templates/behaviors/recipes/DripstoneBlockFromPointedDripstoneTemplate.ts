import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DripstoneBlockFromPointedDripstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:dripstone_block_from_pointed_dripstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XX",
            "XX"
        ],
        key: {
            X: {
                item: "minecraft:pointed_dripstone"
            }
        },
        result: [
            {
                item: "minecraft:dripstone_block"
            }
        ]
    }
});
