import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DropperTemplate = createBPRecipe({
    idRecipe: "minecraft:dropper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "# #",
            "#R#"
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:cobblestone"
            }
        },
        unlock: [
            {
                item: "minecraft:redstone"
            }
        ],
        result: {
            item: "minecraft:dropper",
            data: 3
        }
    }
});
