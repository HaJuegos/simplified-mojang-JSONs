import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TintedGlassTemplate = createBPRecipe({
    idRecipe: "minecraft:tinted_glass",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " A ",
            "ABA",
            " A "
        ],
        key: {
            A: {
                item: "minecraft:amethyst_shard"
            },
            B: {
                item: "minecraft:glass"
            }
        },
        unlock: [
            {
                item: "minecraft:amethyst_shard"
            }
        ],
        result: {
            item: "minecraft:tinted_glass",
            count: 2
        },
        priority: 1
    }
});
