import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireFromStrippedJungleLogTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire_from_stripped_jungle_log",
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
                item: "minecraft:stripped_jungle_log"
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
