import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PinkWoolStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:pink_wool_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "##",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:pink_wool"
            }
        },
        unlock: [
            {
                item: "minecraft:pink_wool"
            }
        ],
        result: {
            item: "minecraft:pink_wool_stairs",
            count: 4
        }
    }
});
