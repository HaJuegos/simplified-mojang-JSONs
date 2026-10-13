import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EnderChestTemplate = createBPRecipe({
    idRecipe: "minecraft:ender_chest",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#E#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:obsidian"
            },
            E: {
                item: "minecraft:ender_eye"
            }
        },
        unlock: [
            {
                item: "minecraft:ender_eye"
            }
        ],
        result: {
            item: "minecraft:ender_chest"
        }
    }
});
