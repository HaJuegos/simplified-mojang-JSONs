import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ShieldFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:shield_from_mangrove_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "ABA",
            "AAA",
            " A "
        ],
        key: {
            A: {
                item: "mangrove_planks"
            },
            B: {
                item: "iron_ingot"
            }
        },
        result: {
            item: "shield",
            count: 1
        },
        priority: 2
    }
});
