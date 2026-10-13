import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterMossyCobblestoneStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_mossy_cobblestone_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:mossy_cobblestone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:mossy_cobblestone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:mossy_cobblestone_stairs",
            data: 0,
            count: 1
        }
    }
});
