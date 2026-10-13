import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PaleOakTrapdoorTemplate = createBPRecipe({
    idRecipe: "minecraft:pale_oak_trapdoor",
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
                item: "minecraft:pale_oak_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:pale_oak_planks"
            }
        ],
        result: {
            item: "minecraft:pale_oak_trapdoor",
            count: 2
        }
    }
});
