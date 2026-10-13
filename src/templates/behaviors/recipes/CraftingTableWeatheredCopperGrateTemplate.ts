import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableWeatheredCopperGrateTemplate = createBPRecipe({
    idRecipe: "minecraft:weathered_copper_grate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " # ",
            "# #",
            " # "
        ],
        key: {
            "#": {
                item: "minecraft:weathered_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:weathered_copper"
            }
        ],
        result: {
            item: "minecraft:weathered_copper_grate",
            count: 4
        }
    }
});
