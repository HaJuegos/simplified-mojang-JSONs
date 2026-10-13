import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireFromMangroveLogTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire_from_mangrove_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " A ",
            "ABA",
            "CCC"
        ],
        key: {
            A: {
                item: "stick"
            },
            B: {
                item: "coal"
            },
            C: {
                item: "mangrove_log"
            }
        },
        result: {
            item: "campfire",
            count: 1
        },
        priority: 2
    }
});
