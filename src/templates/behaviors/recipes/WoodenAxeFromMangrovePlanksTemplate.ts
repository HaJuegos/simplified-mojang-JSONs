import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WoodenAxeFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:wooden_axe_from_mangrove_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "AB",
            " B"
        ],
        key: {
            A: {
                item: "mangrove_planks"
            },
            B: {
                item: "stick"
            }
        },
        result: {
            item: "wooden_axe",
            count: 1
        },
        priority: 2
    }
});
