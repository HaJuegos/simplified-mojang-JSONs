import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterResinBrickChiseledTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_resin_brick_chiseled",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:resin_bricks"
            }
        ],
        unlock: [
            {
                item: "minecraft:resin_bricks"
            }
        ],
        result: {
            item: "minecraft:chiseled_resin_bricks",
            count: 1
        }
    }
});
