import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LitPumpkinTemplate = createBPRecipe({
    idRecipe: "minecraft:lit_pumpkin",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A",
            "B"
        ],
        key: {
            A: {
                item: "minecraft:carved_pumpkin"
            },
            B: {
                item: "minecraft:torch"
            }
        },
        unlock: [
            {
                item: "minecraft:carved_pumpkin"
            }
        ],
        result: {
            item: "minecraft:lit_pumpkin"
        }
    }
});
