import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EmeraldTemplate = createBPRecipe({
    idRecipe: "minecraft:emerald",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:emerald_block"
            }
        },
        unlock: [
            {
                item: "minecraft:emerald_block"
            }
        ],
        result: {
            item: "minecraft:emerald",
            count: 9
        }
    }
});
