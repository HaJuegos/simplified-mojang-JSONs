import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedstoneLampTemplate = createBPRecipe({
    idRecipe: "minecraft:redstone_lamp",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " R ",
            "RGR",
            " R "
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            G: {
                item: "minecraft:glowstone"
            }
        },
        unlock: [
            {
                item: "minecraft:glowstone"
            }
        ],
        result: {
            item: "minecraft:redstone_lamp"
        }
    }
});
