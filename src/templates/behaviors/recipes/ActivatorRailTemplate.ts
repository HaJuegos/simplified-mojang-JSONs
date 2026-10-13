import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ActivatorRailTemplate = createBPRecipe({
    idRecipe: "minecraft:activator_rail",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XSX",
            "X#X",
            "XSX"
        ],
        key: {
            "#": {
                item: "minecraft:redstone_torch"
            },
            S: {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:iron_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:rail"
            }
        ],
        result: {
            item: "minecraft:activator_rail",
            count: 6
        }
    }
});
