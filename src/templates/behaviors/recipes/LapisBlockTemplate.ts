import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LapisBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:lapis_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:dye",
                data: 4
            }
        },
        unlock: [
            {
                item: "minecraft:dye",
                data: 4
            }
        ],
        result: {
            item: "minecraft:lapis_block"
        }
    }
});
