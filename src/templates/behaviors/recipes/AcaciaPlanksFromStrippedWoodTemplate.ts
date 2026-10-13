import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const AcaciaPlanksFromStrippedWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:acacia_planks_from_stripped_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "planks",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_acacia_wood"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_acacia_wood"
            }
        ],
        result: {
            item: "minecraft:acacia_planks",
            count: 4
        }
    }
});
