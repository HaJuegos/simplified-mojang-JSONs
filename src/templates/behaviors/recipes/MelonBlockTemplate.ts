import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MelonBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:melon_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "MMM",
            "MMM",
            "MMM"
        ],
        key: {
            M: {
                item: "minecraft:melon"
            }
        },
        unlock: [
            {
                item: "minecraft:melon"
            }
        ],
        result: {
            item: "minecraft:melon_block"
        }
    }
});
