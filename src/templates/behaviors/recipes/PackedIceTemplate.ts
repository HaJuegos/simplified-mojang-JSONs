import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PackedIceTemplate = createBPRecipe({
    idRecipe: "minecraft:packed_ice",
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
                item: "minecraft:ice"
            }
        },
        unlock: [
            {
                item: "minecraft:ice"
            }
        ],
        result: {
            item: "minecraft:packed_ice",
            count: 1
        }
    }
});
