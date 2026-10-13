import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChiseledCinnabarTemplate = createBPRecipe({
    idRecipe: "minecraft:chiseled_cinnabar",
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
                item: "minecraft:cinnabar_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:cinnabar_slab"
            }
        ],
        priority: 1,
        result: {
            item: "minecraft:chiseled_cinnabar"
        }
    }
});
