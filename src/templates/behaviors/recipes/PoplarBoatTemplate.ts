import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarBoatTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_boat",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "# #",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:poplar_planks"
            }
        },
        unlock: {
            context: "PlayerInWater"
        },
        result: {
            item: "minecraft:poplar_boat"
        }
    }
});
