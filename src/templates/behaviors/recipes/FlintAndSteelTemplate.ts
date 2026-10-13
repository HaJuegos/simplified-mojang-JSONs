import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FlintAndSteelTemplate = createBPRecipe({
    idRecipe: "minecraft:flint_and_steel",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:iron_ingot"
            },
            {
                item: "minecraft:flint"
            }
        ],
        unlock: [
            {
                item: "minecraft:flint"
            },
            {
                item: "minecraft:obsidian"
            }
        ],
        result: {
            item: "minecraft:flint_and_steel"
        }
    }
});
