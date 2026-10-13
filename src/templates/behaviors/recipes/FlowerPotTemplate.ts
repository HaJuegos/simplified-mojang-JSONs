import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FlowerPotTemplate = createBPRecipe({
    idRecipe: "minecraft:flower_pot",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "# #",
            " # "
        ],
        key: {
            "#": {
                item: "minecraft:brick"
            }
        },
        unlock: [
            {
                item: "minecraft:brick"
            }
        ],
        result: {
            item: "minecraft:flower_pot"
        }
    }
});
