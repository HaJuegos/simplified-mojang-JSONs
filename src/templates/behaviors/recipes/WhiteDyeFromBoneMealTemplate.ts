import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WhiteDyeFromBoneMealTemplate = createBPRecipe({
    idRecipe: "minecraft:white_dye_from_bone_meal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "white_dye",
        ingredients: [
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 19
        }
    }
});
