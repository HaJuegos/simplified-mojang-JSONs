import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ObserverTemplate = createBPRecipe({
    idRecipe: "minecraft:observer",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "RRQ",
            "###"
        ],
        key: {
            Q: {
                item: "minecraft:quartz"
            },
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:cobblestone"
            }
        },
        unlock: [
            {
                item: "minecraft:quartz"
            }
        ],
        result: {
            item: "minecraft:observer"
        }
    }
});
