import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrownStainedGlassPaneTemplate = createBPRecipe({
    idRecipe: "minecraft:brown_stained_glass_pane",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_glass_pane",
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:brown_stained_glass"
            }
        },
        unlock: [
            {
                item: "minecraft:brown_stained_glass"
            }
        ],
        result: {
            item: "minecraft:brown_stained_glass_pane",
            count: 16
        }
    }
});
