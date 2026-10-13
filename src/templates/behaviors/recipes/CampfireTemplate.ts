import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CampfireTemplate = createBPRecipe({
    idRecipe: "minecraft:campfire",
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
                tag: "minecraft:logs"
            },
            C: {
                tag: "minecraft:coals"
            }
        },
        unlock: [
            {
                item: "minecraft:stick"
            }
        ],
        result: {
            item: "minecraft:campfire"
        },
        priority: -1
    }
});
