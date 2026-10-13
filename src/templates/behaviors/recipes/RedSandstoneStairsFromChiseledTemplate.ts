import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedSandstoneStairsFromChiseledTemplate = createBPRecipe({
    idRecipe: "minecraft:red_sandstone_stairs_from_chiseled",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:chiseled_red_sandstone"
            }
        },
        unlock: [
            {
                item: "minecraft:chiseled_red_sandstone"
            }
        ],
        result: {
            item: "minecraft:red_sandstone_stairs",
            count: 4
        }
    }
});
