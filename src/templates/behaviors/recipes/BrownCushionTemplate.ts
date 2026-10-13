import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrownCushionTemplate = createBPRecipe({
    idRecipe: "minecraft:brown_cushion",
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
                item: "minecraft:brown_wool_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:brown_wool_slab"
            }
        ],
        result: {
            item: "minecraft:brown_cushion"
        }
    }
});
