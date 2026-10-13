import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NetheriteIngotFromBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:netherite_ingot_from_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "netherite_ingot",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:netherite_block"
            }
        },
        unlock: [
            {
                item: "minecraft:netherite_block"
            }
        ],
        result: {
            item: "minecraft:netherite_ingot",
            count: 9
        }
    }
});
