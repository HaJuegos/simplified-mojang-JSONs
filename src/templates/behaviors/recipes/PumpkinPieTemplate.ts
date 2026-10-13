import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PumpkinPieTemplate = createBPRecipe({
    idRecipe: "minecraft:pumpkin_pie",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:pumpkin"
            },
            {
                item: "minecraft:sugar"
            },
            {
                tag: "minecraft:egg"
            }
        ],
        unlock: [
            {
                item: "minecraft:pumpkin"
            },
            {
                item: "minecraft:carved_pumpkin"
            }
        ],
        result: {
            item: "minecraft:pumpkin_pie"
        }
    }
});
