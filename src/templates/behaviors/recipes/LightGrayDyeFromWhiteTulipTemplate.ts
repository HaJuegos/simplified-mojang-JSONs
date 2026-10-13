import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightGrayDyeFromWhiteTulipTemplate = createBPRecipe({
    idRecipe: "minecraft:light_gray_dye_from_white_tulip",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "light_gray_dye",
        ingredients: [
            {
                item: "minecraft:white_tulip"
            }
        ],
        unlock: [
            {
                item: "minecraft:white_tulip"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 7
        }
    }
});
