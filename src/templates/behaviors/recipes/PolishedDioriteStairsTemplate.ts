import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedDioriteStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_diorite_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:polished_diorite"
            }
        },
        unlock: [
            {
                item: "minecraft:polished_diorite"
            }
        ],
        result: {
            item: "minecraft:polished_diorite_stairs",
            count: 4
        }
    }
});
