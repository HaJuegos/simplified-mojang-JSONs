import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterDarkPrismarineStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_dark_prismarine_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:dark_prismarine"
            }
        ],
        unlock: [
            {
                item: "minecraft:dark_prismarine"
            }
        ],
        result: {
            item: "minecraft:dark_prismarine_stairs",
            data: 0,
            count: 1
        }
    }
});
