import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PinkCushionTemplate = createBPRecipe({
    idRecipe: "minecraft:pink_cushion",
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
                item: "minecraft:pink_wool_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:pink_wool_slab"
            }
        ],
        result: {
            item: "minecraft:pink_cushion"
        }
    }
});
