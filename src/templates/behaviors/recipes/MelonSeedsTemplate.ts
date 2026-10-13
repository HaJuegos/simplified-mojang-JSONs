import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MelonSeedsTemplate = createBPRecipe({
    idRecipe: "minecraft:melon_seeds",
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
                item: "minecraft:melon"
            }
        },
        unlock: [
            {
                item: "minecraft:melon"
            }
        ],
        result: {
            item: "minecraft:melon_seeds"
        }
    }
});
