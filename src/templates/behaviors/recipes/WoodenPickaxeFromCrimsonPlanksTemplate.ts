import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WoodenPickaxeFromCrimsonPlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:wooden_pickaxe_from_crimson_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            " B ",
            " B "
        ],
        key: {
            A: {
                item: "crimson_planks"
            },
            B: {
                item: "stick"
            }
        },
        result: {
            item: "wooden_pickaxe",
            count: 1
        },
        priority: 2
    }
});
