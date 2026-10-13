import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChiseledTuffTemplate = createBPRecipe({
    idRecipe: "minecraft:chiseled_tuff",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        key: {
            "#": {
                item: "minecraft:tuff_slab"
            }
        },
        pattern: [
            "#",
            "#"
        ],
        unlock: [
            {
                item: "minecraft:tuff_slab"
            }
        ],
        priority: 1,
        result: {
            item: "minecraft:chiseled_tuff"
        }
    }
});
