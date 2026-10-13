import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FermentedSpiderEyeTemplate = createBPRecipe({
    idRecipe: "minecraft:fermented_spider_eye",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:spider_eye"
            },
            {
                item: "minecraft:brown_mushroom"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        unlock: [
            {
                item: "minecraft:spider_eye"
            }
        ],
        result: {
            item: "minecraft:fermented_spider_eye"
        }
    }
});
