import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrayDyeFromInkBonemealTemplate = createBPRecipe({
    idRecipe: "minecraft:gray_dye_from_ink_bonemeal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        priority: 3,
        ingredients: [
            {
                item: "minecraft:dye",
                data: 0
            },
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 0
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
