import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ResinClumpFromResinBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:resin_clump_from_resin_block",
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
                item: "minecraft:resin_block"
            }
        },
        unlock: [
            {
                item: "minecraft:resin_block"
            }
        ],
        result: {
            item: "minecraft:resin_clump",
            count: 9
        }
    }
});
