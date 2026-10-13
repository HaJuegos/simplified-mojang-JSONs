import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SoulLanternTemplate = createBPRecipe({
    idRecipe: "minecraft:soul_lantern",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "...",
            ".|.",
            "..."
        ],
        key: {
            "|": {
                item: "minecraft:soul_torch"
            },
            ".": {
                item: "minecraft:iron_nugget"
            }
        },
        unlock: [
            {
                item: "minecraft:soul_torch"
            }
        ],
        result: {
            item: "minecraft:soul_lantern"
        }
    }
});
