import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrayCarpetTemplate = createBPRecipe({
    idRecipe: "minecraft:gray_carpet",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "carpet",
        pattern: [
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:gray_wool"
            }
        },
        unlock: [
            {
                item: "minecraft:gray_wool"
            }
        ],
        result: {
            item: "minecraft:gray_carpet",
            count: 3
        }
    }
});
