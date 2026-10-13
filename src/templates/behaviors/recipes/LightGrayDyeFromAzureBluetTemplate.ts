import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightGrayDyeFromAzureBluetTemplate = createBPRecipe({
    idRecipe: "minecraft:light_gray_dye_from_azure_bluet",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "light_gray_dye",
        priority: 2,
        ingredients: [
            {
                item: "minecraft:azure_bluet"
            }
        ],
        unlock: [
            {
                item: "minecraft:azure_bluet"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 7
        }
    }
});
