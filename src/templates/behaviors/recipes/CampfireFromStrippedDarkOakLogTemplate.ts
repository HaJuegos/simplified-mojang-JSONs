import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireFromStrippedDarkOakLogTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire_from_stripped_dark_oak_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " | ",
            "|C|",
            "###"
        ],
        key: {
            "|": {
                item: "minecraft:stick"
            },
            "#": {
                item: "minecraft:stripped_dark_oak_log"
            },
            C: {
                item: "minecraft:coal"
            }
        },
        result: {
            item: "minecraft:campfire"
        },
        priority: 2
    }
});
