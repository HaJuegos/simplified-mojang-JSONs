import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MagentaDyeFromAlliumTemplate = createBPRecipe({
    idRecipe: "minecraft:magenta_dye_from_allium",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "magenta_dye",
        priority: 1,
        ingredients: [
            {
                item: "minecraft:allium"
            }
        ],
        unlock: [
            {
                item: "minecraft:allium"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 13
        }
    }
});
