import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterCobblestoneStairsFromStoneTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_cobblestone_stairs_from_stone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:stone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:stone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:stone_stairs",
            count: 1
        }
    }
});
