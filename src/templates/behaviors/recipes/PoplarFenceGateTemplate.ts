import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PoplarFenceGateTemplate = createBPRecipe({
    idRecipe: "minecraft:poplar_fence_gate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_fence_gate",
        pattern: [
            "#W#",
            "#W#"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            W: {
                item: "minecraft:poplar_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:poplar_planks"
            }
        ],
        result: {
            item: "minecraft:poplar_fence_gate"
        }
    }
});
