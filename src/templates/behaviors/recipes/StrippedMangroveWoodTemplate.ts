import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StrippedMangroveWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:stripped_mangrove_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "deprecated"
        ],
        group: "wood",
        pattern: [
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_mangrove_log"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_mangrove_log"
            }
        ],
        result: {
            item: "minecraft:stripped_mangrove_wood",
            count: 3
        }
    }
});
