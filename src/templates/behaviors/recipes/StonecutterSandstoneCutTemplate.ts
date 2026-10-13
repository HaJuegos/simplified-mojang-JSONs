import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSandstoneCutTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_sandstone_cut",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:sandstone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:sandstone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:cut_sandstone",
            count: 1
        }
    }
});
