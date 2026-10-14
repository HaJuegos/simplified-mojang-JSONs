import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SoulTorchTemplate = createBPRecipe({
    idRecipe: "minecraft:soul_torch",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            ".",
            "|",
            "#"
        ],
        key: {
            ".": {
                tag: "minecraft:coals"
            },
            "|": {
                item: "minecraft:stick"
            },
            "#": {
                tag: "minecraft:soul_fire_base_blocks"
            }
        },
        unlock: [
            {
                tag: "minecraft:soul_fire_base_blocks"
            }
        ],
        result: {
            item: "minecraft:soul_torch",
            count: 4
        },
        priority: -1
    }
});
