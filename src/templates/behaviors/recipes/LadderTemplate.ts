import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LadderTemplate = createBPRecipe({
    idRecipe: "minecraft:ladder",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "# #",
            "###",
            "# #"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:stick"
            }
        ],
        result: {
            item: "minecraft:ladder",
            count: 3
        }
    }
});
