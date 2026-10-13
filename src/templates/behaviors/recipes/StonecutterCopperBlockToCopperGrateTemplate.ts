import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterCopperBlockToCopperGrateTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_copper_block_to_copper_grate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:copper_block"
            }
        ],
        unlock: [
            {
                item: "minecraft:copper_block"
            }
        ],
        result: {
            item: "minecraft:copper_grate",
            count: 4
        }
    }
});
