import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const YellowDyeFromSunflowerTemplate = createBPRecipe({
    idRecipe: "minecraft:yellow_dye_from_sunflower",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "yellow_dye",
        ingredients: [
            {
                item: "minecraft:sunflower"
            }
        ],
        unlock: [
            {
                item: "minecraft:sunflower"
            }
        ],
        result: {
            item: "minecraft:yellow_dye",
            count: 2
        }
    }
});
