import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WhiteStainedGlassFromBonemealTemplate = createBPRecipe({
    idRecipe: "minecraft:white_stained_glass_from_bonemeal",
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
                item: "minecraft:bone_meal"
            }
        },
        unlock: [
            {
                item: "minecraft:glass"
            }
        ],
        result: {
            item: "minecraft:white_stained_glass",
            count: 8
        }
    }
});
