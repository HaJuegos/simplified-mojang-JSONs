import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrayDyeFromClosedEyeblossomTemplate = createBPRecipe({
    idRecipe: "minecraft:gray_dye_from_closed_eyeblossom",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "gray_dye",
        ingredients: [
            {
                item: "minecraft:closed_eyeblossom"
            }
        ],
        unlock: [
            {
                item: "minecraft:closed_eyeblossom"
            }
        ],
        result: {
            item: "minecraft:gray_dye"
        }
    }
});
