import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const AmethystBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:amethyst_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "AA"
        ],
        key: {
            A: {
                item: "minecraft:amethyst_shard"
            }
        },
        unlock: [
            {
                item: "minecraft:amethyst_shard"
            }
        ],
        result: {
            item: "minecraft:amethyst_block",
            count: 1
        },
        priority: 1
    }
});
