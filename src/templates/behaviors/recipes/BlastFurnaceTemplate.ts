import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlastFurnaceTemplate = createBPRecipe({
    idRecipe: "minecraft:blast_furnace",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "III",
            "IFI",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:smooth_stone"
            },
            I: {
                item: "minecraft:iron_ingot"
            },
            F: {
                item: "minecraft:furnace"
            }
        },
        unlock: [
            {
                item: "minecraft:smooth_stone"
            }
        ],
        result: {
            item: "minecraft:blast_furnace"
        }
    }
});
