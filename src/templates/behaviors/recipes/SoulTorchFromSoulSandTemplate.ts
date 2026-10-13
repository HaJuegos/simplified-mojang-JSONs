import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SoulTorchFromSoulSandTemplate = createBPRecipe({
    idRecipe: "minecraft:soul_torch_from_soul_sand",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            ".",
            "|",
            "#"
        ],
        key: {
            ".": {
                item: "minecraft:coal"
            },
            "|": {
                item: "minecraft:stick"
            },
            "#": {
                item: "minecraft:soul_sand"
            }
        },
        result: {
            item: "minecraft:soul_torch",
            count: 4
        }
    }
});
