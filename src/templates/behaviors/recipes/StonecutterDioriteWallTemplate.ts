import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterDioriteWallTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_diorite_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
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
            item: "minecraft:diorite_wall",
            count: 1
        }
    }
});
