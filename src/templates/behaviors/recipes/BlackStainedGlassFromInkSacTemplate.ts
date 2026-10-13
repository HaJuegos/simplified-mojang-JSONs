import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlackStainedGlassFromInkSacTemplate = createBPRecipe({
    idRecipe: "minecraft:black_stained_glass_from_ink_sac",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_glass",
        priority: 1,
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:glass"
            },
            X: {
                item: "minecraft:ink_sac"
            }
        },
        unlock: [
            {
                item: "minecraft:glass"
            }
        ],
        result: {
            item: "minecraft:black_stained_glass",
            count: 8
        }
    }
});
