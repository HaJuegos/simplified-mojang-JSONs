import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MagentaDyeFromPurpleAndPinkTemplate = createBPRecipe({
    idRecipe: "minecraft:magenta_dye_from_purple_and_pink",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "magenta_dye",
        priority: 3,
        ingredients: [
            {
                item: "minecraft:dye",
                data: 5
            },
            {
                item: "minecraft:dye",
                data: 9
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 5
            },
            {
                item: "minecraft:dye",
                data: 9
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 13,
            count: 2
        }
    }
});
