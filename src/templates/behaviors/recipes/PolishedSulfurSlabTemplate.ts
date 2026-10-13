import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedSulfurSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_sulfur_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:polished_sulfur"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_sulfur"
            }
        ],
        result: {
            item: "minecraft:polished_sulfur_slab",
            count: 6
        }
    }
});
