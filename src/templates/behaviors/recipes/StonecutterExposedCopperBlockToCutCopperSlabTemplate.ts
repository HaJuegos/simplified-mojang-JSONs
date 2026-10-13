import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterExposedCopperBlockToCutCopperSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_exposed_copper_to_exposed_cut_copper_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:exposed_copper"
            }
        ],
        unlock: [
            {
                item: "minecraft:exposed_copper"
            }
        ],
        result: {
            item: "minecraft:exposed_cut_copper_slab",
            count: 8
        }
    }
});
