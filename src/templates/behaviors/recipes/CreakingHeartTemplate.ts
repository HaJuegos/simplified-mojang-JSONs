import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CreakingHeartTemplate = createBPRecipe({
    idRecipe: "minecraft:creaking_heart",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "R",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:pale_oak_log"
            },
            R: {
                item: "minecraft:resin_block"
            }
        },
        unlock: [
            {
                item: "minecraft:pale_oak_log"
            },
            {
                item: "minecraft:resin_block"
            }
        ],
        result: {
            item: "minecraft:creaking_heart"
        }
    }
});
