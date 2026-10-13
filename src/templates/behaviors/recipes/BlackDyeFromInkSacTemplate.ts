import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlackDyeFromInkSacTemplate = createBPRecipe({
    idRecipe: "minecraft:black_dye_from_ink_sac",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "black_dye",
        ingredients: [
            {
                item: "minecraft:dye",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 0
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 16
        }
    }
});
