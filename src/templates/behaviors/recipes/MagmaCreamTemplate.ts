import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MagmaCreamTemplate = createBPRecipe({
    idRecipe: "minecraft:magma_cream",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:blaze_powder"
            },
            {
                item: "minecraft:slime_ball"
            }
        ],
        unlock: [
            {
                item: "minecraft:blaze_powder"
            }
        ],
        result: {
            item: "minecraft:magma_cream"
        }
    }
});
