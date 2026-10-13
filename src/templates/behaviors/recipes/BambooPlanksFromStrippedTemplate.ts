import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooPlanksFromStrippedTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_planks_from_stripped",
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
                item: "minecraft:stripped_bamboo_block"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_bamboo_block"
            }
        ],
        result: {
            item: "minecraft:bamboo_planks",
            count: 2
        }
    }
});
