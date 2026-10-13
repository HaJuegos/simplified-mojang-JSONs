import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CopperTorchTemplate = createBPRecipe({
    idRecipe: "minecraft:copper_torch",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "^",
            ".",
            "|"
        ],
        key: {
            ".": {
                tag: "minecraft:coals"
            },
            "|": {
                item: "minecraft:stick"
            },
            "^": {
                item: "minecraft:copper_nugget"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_nugget"
            }
        ],
        result: {
            item: "minecraft:copper_torch",
            count: 4
        }
    }
});
