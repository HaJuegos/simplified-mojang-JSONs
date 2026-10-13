import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrimsonPlanksFromCrimsonHyphaeTemplate = createBPRecipe({
    idRecipe: "minecraft:crimson_planks_from_crimson_hyphae",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "planks",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:crimson_hyphae"
            }
        },
        unlock: [
            {
                item: "minecraft:crimson_hyphae"
            }
        ],
        result: {
            item: "minecraft:crimson_planks",
            count: 4
        }
    }
});
