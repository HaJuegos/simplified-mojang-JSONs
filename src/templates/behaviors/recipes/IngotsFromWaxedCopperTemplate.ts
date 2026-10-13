import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const IngotsFromWaxedCopperTemplate = createBPRecipe({
    idRecipe: "minecraft:ingots_from_waxed_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A"
        ],
        key: {
            A: {
                item: "minecraft:waxed_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:waxed_copper"
            }
        ],
        result: {
            item: "minecraft:copper_ingot",
            count: 9
        },
        priority: 1
    }
});
