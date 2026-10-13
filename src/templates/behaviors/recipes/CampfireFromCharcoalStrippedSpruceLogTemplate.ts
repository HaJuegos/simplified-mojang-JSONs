import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireFromCharcoalStrippedSpruceLogTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire_from_charcoal_stripped_spruce_log",
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
                item: "minecraft:stripped_spruce_log"
            },
            C: {
                item: "minecraft:charcoal"
            }
        },
        result: {
            item: "minecraft:campfire"
        }
    }
});
