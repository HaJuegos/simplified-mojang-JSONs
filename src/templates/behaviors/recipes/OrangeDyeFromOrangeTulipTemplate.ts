import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeDyeFromOrangeTulipTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_dye_from_orange_tulip",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "orange_dye",
        ingredients: [
            {
                item: "minecraft:orange_tulip"
            }
        ],
        unlock: [
            {
                item: "minecraft:orange_tulip"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 14
        }
    }
});
