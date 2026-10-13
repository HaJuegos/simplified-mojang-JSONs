import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const HoneyBottleToSugarTemplate = createBPRecipe({
    idRecipe: "minecraft:honey_bottle_to_sugar",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:honey_bottle"
            }
        },
        unlock: [
            {
                item: "minecraft:honey_bottle"
            }
        ],
        // TODO: Se esperaba un texto y llego una lista.
        result: [
            {
                item: "minecraft:sugar",
                count: 3
            },
            {
                item: "minecraft:glass_bottle",
                count: 1
            }
        ]
    }
});
