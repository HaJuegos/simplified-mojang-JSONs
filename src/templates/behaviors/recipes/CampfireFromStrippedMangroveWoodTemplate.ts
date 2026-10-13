import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireFromStrippedMangroveWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire_from_stripped_mangrove_wood",
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
                item: "stripped_mangrove_wood"
            }
        },
        result: {
            item: "campfire",
            count: 1
        },
        priority: 50
    }
});
