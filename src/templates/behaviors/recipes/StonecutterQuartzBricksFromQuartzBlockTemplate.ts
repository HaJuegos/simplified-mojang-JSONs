import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterQuartzBricksFromQuartzBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_quartz_bricks_from_quartz_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:quartz_block:0"
            }
        ],
        unlock: [
            {
                item: "minecraft:quartz_block",
                data: 0
            }
        ],
        result: {
            item: "minecraft:quartz_bricks",
            count: 1
        }
    }
});
