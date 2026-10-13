import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SoulCampfireFromStrippedWarpedStem2Template = createBPRecipe({
    idRecipe: "minecraft:soul_campfire_from_stripped_warped_stem2",
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
                item: "soul_sand"
            },
            C: {
                item: "stripped_warped_stem"
            }
        },
        result: {
            item: "soul_campfire",
            count: 1
        },
        priority: 2
    }
});
