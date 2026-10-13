import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EndRodTemplate = createBPRecipe({
    idRecipe: "minecraft:end_rod",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "/",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:chorus_fruit_popped"
            },
            "/": {
                item: "minecraft:blaze_rod"
            }
        },
        unlock: [
            {
                item: "minecraft:chorus_fruit_popped"
            }
        ],
        result: {
            item: "minecraft:end_rod",
            count: 4
        }
    }
});
