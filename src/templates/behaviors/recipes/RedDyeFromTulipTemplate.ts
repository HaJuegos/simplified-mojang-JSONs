import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedDyeFromTulipTemplate = createBPRecipe({
    idRecipe: "minecraft:red_dye_from_tulip",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "red_dye",
        ingredients: [
            {
                item: "minecraft:red_tulip"
            }
        ],
        unlock: [
            {
                item: "minecraft:red_tulip"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 1
        }
    }
});
