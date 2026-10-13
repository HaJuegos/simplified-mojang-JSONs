import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlackDyeFromWitherRoseTemplate = createBPRecipe({
    idRecipe: "minecraft:black_dye_from_wither_rose",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "black_dye",
        ingredients: [
            {
                item: "minecraft:wither_rose"
            }
        ],
        unlock: [
            {
                item: "minecraft:wither_rose"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 16
        }
    }
});
