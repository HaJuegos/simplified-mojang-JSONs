import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterStoneBrickWallFromCobblestoneTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_stone_brick_wall_from_cobblestone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:cobblestone"
            }
        ],
        unlock: [
            {
                item: "minecraft:cobblestone"
            }
        ],
        result: {
            item: "minecraft:stone_brick_wall",
            count: 1
        }
    }
});
