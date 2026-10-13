import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MagentaDyeFromLilacTemplate = createBPRecipe({
    idRecipe: "minecraft:magenta_dye_from_lilac",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "magenta_dye",
        ingredients: [
            {
                item: "minecraft:lilac"
            }
        ],
        unlock: [
            {
                item: "minecraft:lilac"
            }
        ],
        result: {
            item: "minecraft:magenta_dye",
            count: 2
        }
    }
});
