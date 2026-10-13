import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightGrayDyeFromOxeyeDaisyTemplate = createBPRecipe({
    idRecipe: "minecraft:light_gray_dye_from_oxeye_daisy",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "light_gray_dye",
        priority: 1,
        ingredients: [
            {
                item: "minecraft:oxeye_daisy"
            }
        ],
        unlock: [
            {
                item: "minecraft:oxeye_daisy"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 7
        }
    }
});
