import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DiamondBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:diamond_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:diamond"
            }
        },
        unlock: [
            {
                item: "minecraft:diamond"
            }
        ],
        result: {
            item: "minecraft:diamond_block"
        }
    }
});
