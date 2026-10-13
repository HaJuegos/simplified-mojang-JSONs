import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CyanDyeFromPitcherPlantTemplate = createBPRecipe({
    idRecipe: "minecraft:cyan_dye_from_pitcher_plant",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "cyan_dye",
        ingredients: [
            {
                item: "minecraft:pitcher_plant"
            }
        ],
        unlock: [
            {
                item: "minecraft:pitcher_plant"
            }
        ],
        result: {
            item: "minecraft:cyan_dye",
            count: 2
        }
    }
});
