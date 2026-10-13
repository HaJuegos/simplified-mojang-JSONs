import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooTrapdoorTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_trapdoor",
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
                item: "minecraft:bamboo_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:bamboo_planks"
            }
        ],
        result: {
            item: "minecraft:bamboo_trapdoor",
            count: 2
        }
    }
});
