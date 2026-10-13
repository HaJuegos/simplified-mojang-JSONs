import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DispenserTemplate = createBPRecipe({
    idRecipe: "minecraft:dispenser",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#X#",
            "#R#"
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:cobblestone"
            },
            X: {
                item: "minecraft:bow"
            }
        },
        unlock: [
            {
                item: "minecraft:bow"
            }
        ],
        result: {
            item: "minecraft:dispenser",
            data: 3
        }
    }
});
