import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkOakBoatTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_oak_boat",
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
                item: "minecraft:dark_oak_planks"
            }
        },
        unlock: {
            context: "PlayerInWater"
        },
        result: {
            item: "minecraft:dark_oak_boat"
        }
    }
});
