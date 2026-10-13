import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterCutRedSandstoneSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_cut_red_sandstone_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:cut_red_sandstone"
            }
        ],
        unlock: [
            {
                item: "minecraft:cut_red_sandstone"
            }
        ],
        result: {
            item: "minecraft:cut_red_sandstone_slab",
            count: 2
        }
    }
});
