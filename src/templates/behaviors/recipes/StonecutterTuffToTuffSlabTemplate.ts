import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterTuffToTuffSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_tuff_to_tuff_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:tuff"
            }
        ],
        unlock: [
            {
                item: "minecraft:tuff"
            }
        ],
        result: {
            item: "minecraft:tuff_slab",
            count: 2
        }
    }
});
