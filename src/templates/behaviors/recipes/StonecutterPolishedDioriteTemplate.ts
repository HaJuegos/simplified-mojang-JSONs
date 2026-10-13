import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedDioriteTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_diorite",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:diorite"
            }
        ],
        unlock: [
            {
                item: "minecraft:diorite"
            }
        ],
        result: {
            item: "minecraft:polished_diorite",
            count: 1
        }
    }
});
