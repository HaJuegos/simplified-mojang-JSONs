import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BasicMapToEnhancedTemplate = createBPRecipe({
    idRecipe: "minecraft:basic_map_to_enhanced",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:emptymap",
                data: 1
            },
            {
                item: "minecraft:compass"
            }
        ],
        unlock: [
            {
                item: "minecraft:compass"
            }
        ],
        result: {
            item: "minecraft:emptymap",
            data: 2
        }
    }
});
