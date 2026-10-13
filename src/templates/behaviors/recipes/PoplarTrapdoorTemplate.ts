import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarTrapdoorTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_trapdoor",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_trap_door",
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:poplar_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:poplar_planks"
            }
        ],
        result: {
            item: "minecraft:poplar_trapdoor",
            count: 2
        }
    }
});
