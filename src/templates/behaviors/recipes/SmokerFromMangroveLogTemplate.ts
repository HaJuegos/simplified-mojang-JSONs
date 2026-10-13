import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmokerFromMangroveLogTemplate = createBPRecipe({
    idRecipe: "minecraft:smoker_from_mangrove_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " A ",
            "ABA",
            " A "
        ],
        key: {
            A: {
                item: "mangrove_log"
            },
            B: {
                item: "furnace"
            }
        },
        result: {
            item: "smoker",
            count: 1
        },
        priority: 2
    }
});
