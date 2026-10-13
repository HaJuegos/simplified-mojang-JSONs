import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TripwireHookFromWarpedPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:tripwire_hook_from_warped_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "A",
            "B",
            "C"
        ],
        key: {
            A: {
                item: "iron_ingot"
            },
            B: {
                item: "stick"
            },
            C: {
                item: "warped_planks"
            }
        },
        result: {
            item: "tripwire_hook",
            count: 1
        },
        priority: 2
    }
});
