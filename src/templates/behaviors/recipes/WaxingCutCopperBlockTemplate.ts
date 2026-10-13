import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WaxingCutCopperBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:waxing_cut_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:cut_copper"
            },
            {
                item: "minecraft:honeycomb"
            }
        ],
        unlock: [
            {
                item: "minecraft:cut_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_cut_copper",
            count: 1
        },
        priority: 1
    }
});
