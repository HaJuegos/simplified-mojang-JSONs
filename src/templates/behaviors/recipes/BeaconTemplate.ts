import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BeaconTemplate = createBPRecipe({
    idRecipe: "minecraft:beacon",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "GGG",
            "GSG",
            "OOO"
        ],
        key: {
            S: {
                item: "minecraft:netherstar"
            },
            G: {
                item: "minecraft:glass"
            },
            O: {
                item: "minecraft:obsidian"
            }
        },
        unlock: [
            {
                item: "minecraft:netherstar"
            }
        ],
        result: {
            item: "minecraft:beacon"
        }
    }
});
