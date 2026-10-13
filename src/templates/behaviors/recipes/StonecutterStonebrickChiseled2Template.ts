import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterStonebrickChiseled2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_stonebrick_chiseled2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:stone_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:stone_bricks"
            }
        ],
        result: {
            item: "minecraft:chiseled_stone_bricks",
            count: 1
        }
    }
});
