import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const HoneyBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:honey_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XX",
            "XX"
        ],
        key: {
            X: {
                item: "minecraft:honey_bottle"
            }
        },
        unlock: [
            {
                item: "minecraft:honey_bottle"
            }
        ],
        result: [
            {
                item: "minecraft:honey_block"
            },
            {
                item: "minecraft:glass_bottle",
                count: 4,
                data: 0
            }
        ]
    }
});
