import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const IronIngotFromBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:iron_ingot_from_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "iron_ingot",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:iron_block"
            }
        },
        unlock: [
            {
                item: "minecraft:iron_block"
            }
        ],
        result: {
            item: "minecraft:iron_ingot",
            count: 9
        }
    }
});
