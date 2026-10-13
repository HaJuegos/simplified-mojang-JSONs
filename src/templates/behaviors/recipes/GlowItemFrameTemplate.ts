import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GlowItemFrameTemplate = createBPRecipe({
    idRecipe: "minecraft:glow_frame",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:frame"
            },
            {
                item: "minecraft:glow_ink_sac"
            }
        ],
        unlock: [
            {
                item: "minecraft:frame"
            },
            {
                item: "minecraft:glow_ink_sac"
            }
        ],
        result: {
            item: "minecraft:glow_frame"
        }
    }
});
