import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SpruceWoodStrippedTemplate = createBPRecipe({
    idRecipe: "minecraft:spruce_wood_stripped",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wood",
        pattern: [
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_spruce_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_spruce_log"
            }
        ],
        result: {
            item: "minecraft:stripped_spruce_wood",
            count: 3
        }
    }
});
