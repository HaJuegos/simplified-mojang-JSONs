import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightBlueDyeFromLapisBonemealTemplate = createBPRecipe({
    idRecipe: "minecraft:light_blue_dye_from_lapis_bonemeal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "light_blue_dye",
        priority: 4,
        ingredients: [
            {
                item: "minecraft:dye",
                data: 4
            },
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 4
            },
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 12,
            count: 2
        }
    }
});
