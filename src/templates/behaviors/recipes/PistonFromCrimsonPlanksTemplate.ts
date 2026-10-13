import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PistonFromCrimsonPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:piston_from_crimson_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "BCB",
            "BDB"
        ],
        key: {
            A: {
                item: "crimson_planks"
            },
            B: {
                item: "cobblestone"
            },
            C: {
                item: "iron_ingot"
            },
            D: {
                item: "redstone"
            }
        },
        result: {
            item: "piston",
            count: 1,
            data: 1
        },
        priority: 2
    }
});
