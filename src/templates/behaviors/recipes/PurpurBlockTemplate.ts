import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PurpurBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:purpur_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "FF",
            "FF"
        ],
        key: {
            F: {
                item: "minecraft:chorus_fruit_popped"
            }
        },
        unlock: [
            {
                item: "minecraft:chorus_fruit_popped"
            }
        ],
        result: {
            item: "minecraft:purpur_block",
            count: 4
        }
    }
});
