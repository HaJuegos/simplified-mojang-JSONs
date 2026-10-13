import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BoneMealFromBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:bone_meal_from_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "bonemeal",
        ingredients: [
            {
                item: "minecraft:bone_block"
            }
        ],
        unlock: [
            {
                item: "minecraft:bone_block"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 15,
            count: 9
        }
    }
});
