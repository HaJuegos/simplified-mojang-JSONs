import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlueDyeFromCornflowerTemplate = createBPRecipe({
    idRecipe: "minecraft:blue_dye_from_cornflower",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "blue_dye",
        ingredients: [
            {
                item: "minecraft:cornflower"
            }
        ],
        unlock: [
            {
                item: "minecraft:cornflower"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 18
        }
    }
});
