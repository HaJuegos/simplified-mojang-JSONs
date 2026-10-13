import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PurpleDyeTemplate = createBPRecipe({
    idRecipe: "minecraft:purple_dye",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:dye",
                data: 18
            },
            {
                item: "minecraft:dye",
                data: 1
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 18
            },
            {
                item: "minecraft:dye",
                data: 1
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 5,
            count: 2
        }
    }
});
