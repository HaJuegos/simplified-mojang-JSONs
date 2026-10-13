import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrayCushionTemplate = createBPRecipe({
    idRecipe: "minecraft:gray_cushion",
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
                item: "minecraft:gray_wool_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:gray_wool_slab"
            }
        ],
        result: {
            item: "minecraft:gray_cushion"
        }
    }
});
