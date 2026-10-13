import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrownStainedGlassTemplate = createBPRecipe({
    idRecipe: "minecraft:brown_stained_glass",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_glass",
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
                item: "minecraft:brown_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:glass"
            }
        ],
        result: {
            item: "minecraft:brown_stained_glass",
            count: 8
        }
    }
});
