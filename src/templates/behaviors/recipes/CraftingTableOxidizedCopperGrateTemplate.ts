import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CraftingTableOxidizedCopperGrateTemplate = createBPRecipe({
    idRecipe: "minecraft:oxidized_copper_grate",
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
                item: "minecraft:oxidized_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:oxidized_copper"
            }
        ],
        result: {
            item: "minecraft:oxidized_copper_grate",
            count: 4
        }
    }
});
