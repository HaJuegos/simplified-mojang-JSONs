import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterEndbrickSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_endbrick_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:end_stone"
            }
        ],
        unlock: [
            {
                item: "minecraft:end_stone"
            }
        ],
        result: {
            item: "minecraft:end_stone_brick_slab",
            count: 2
        }
    }
});
