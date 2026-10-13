import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SpyglassTemplate = createBPRecipe({
    idRecipe: "minecraft:spyglass",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "X",
            "X"
        ],
        key: {
            "#": {
                item: "minecraft:amethyst_shard"
            },
            X: {
                item: "minecraft:copper_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:amethyst_shard"
            }
        ],
        result: {
            item: "minecraft:spyglass",
            count: 1
        },
        priority: 1
    }
});
