import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LapisLazuliTemplate = createBPRecipe({
    idRecipe: "minecraft:lapis_lazuli",
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
                item: "minecraft:lapis_block"
            }
        },
        unlock: [
            {
                item: "minecraft:lapis_block"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 4,
            count: 9
        }
    }
});
