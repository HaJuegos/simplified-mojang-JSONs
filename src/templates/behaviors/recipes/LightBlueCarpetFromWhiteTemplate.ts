import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightBlueCarpetFromWhiteTemplate = createBPRecipe({
    idRecipe: "minecraft:light_blue_carpet_from_white",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "carpet",
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:white_carpet"
            },
            X: {
                item: "minecraft:light_blue_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:white_carpet"
            },
            {
                item: "minecraft:light_blue_dye"
            }
        ],
        result: {
            item: "minecraft:light_blue_carpet",
            count: 8
        }
    }
});
