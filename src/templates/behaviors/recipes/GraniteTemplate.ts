import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GraniteTemplate = createBPRecipe({
    idRecipe: "minecraft:granite",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:diorite"
            },
            {
                item: "minecraft:quartz"
            }
        ],
        unlock: [
            {
                item: "minecraft:quartz"
            }
        ],
        result: {
            item: "minecraft:granite"
        }
    }
});
