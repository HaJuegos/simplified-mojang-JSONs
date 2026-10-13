import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeDyeFromRedYellowTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_dye_from_red_yellow",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "orange_dye",
        ingredients: [
            {
                item: "minecraft:dye",
                data: 1
            },
            {
                item: "minecraft:dye",
                data: 11
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 1
            },
            {
                item: "minecraft:dye",
                data: 11
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 14,
            count: 2
        }
    }
});
