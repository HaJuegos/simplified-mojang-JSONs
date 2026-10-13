import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChiseledPolishedBlackstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:chiseled_polished_blackstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:polished_blackstone_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_blackstone_slab"
            }
        ],
        result: {
            item: "minecraft:chiseled_polished_blackstone"
        }
    }
});
