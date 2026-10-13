import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EnchantingTableTemplate = createBPRecipe({
    idRecipe: "minecraft:enchanting_table",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " B ",
            "D#D",
            "###"
        ],
        key: {
            B: {
                item: "minecraft:book"
            },
            "#": {
                item: "minecraft:obsidian"
            },
            D: {
                item: "minecraft:diamond"
            }
        },
        unlock: [
            {
                item: "minecraft:obsidian"
            }
        ],
        result: {
            item: "minecraft:enchanting_table"
        }
    }
});
