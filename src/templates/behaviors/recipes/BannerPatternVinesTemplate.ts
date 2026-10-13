import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BannerPatternVinesTemplate = createBPRecipe({
    idRecipe: "minecraft:banner_pattern_vines",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "banner_pattern",
        ingredients: [
            {
                item: "minecraft:paper"
            },
            {
                item: "minecraft:vine"
            }
        ],
        unlock: [
            {
                item: "minecraft:vine"
            }
        ],
        result: {
            item: "minecraft:banner_pattern",
            data: 5
        }
    }
});
