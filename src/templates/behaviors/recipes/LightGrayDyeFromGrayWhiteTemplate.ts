import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightGrayDyeFromGrayWhiteTemplate = createBPRecipe({
    idRecipe: "minecraft:light_gray_dye_from_gray_white",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "light_gray_dye",
        priority: 4,
        ingredients: [
            {
                item: "minecraft:dye",
                data: 8
            },
            {
                item: "minecraft:dye",
                data: 19
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 8
            },
            {
                item: "minecraft:dye",
                data: 19
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 7,
            count: 2
        }
    }
});
