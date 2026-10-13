import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DioriteWallTemplate = createBPRecipe({
    idRecipe: "minecraft:diorite_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:diorite"
            }
        },
        unlock: [
            {
                item: "minecraft:diorite"
            }
        ],
        result: {
            item: "minecraft:diorite_wall",
            count: 6
        }
    }
});
