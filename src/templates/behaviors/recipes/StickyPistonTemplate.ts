import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StickyPistonTemplate = createBPRecipe({
    idRecipe: "minecraft:sticky_piston",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "S",
            "P"
        ],
        key: {
            P: {
                item: "minecraft:piston"
            },
            S: {
                item: "minecraft:slime_ball"
            }
        },
        unlock: [
            {
                item: "minecraft:slime_ball"
            }
        ],
        result: {
            item: "minecraft:sticky_piston",
            data: 1
        }
    }
});
