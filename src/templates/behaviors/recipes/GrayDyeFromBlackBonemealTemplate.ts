import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrayDyeFromBlackBonemealTemplate = createBPRecipe({
    idRecipe: "minecraft:gray_dye_from_black_bonemeal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        priority: 1,
        ingredients: [
            {
                item: "minecraft:dye",
                data: 16
            },
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 16
            },
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 8,
            count: 2
        }
    }
});
