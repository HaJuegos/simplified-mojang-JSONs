import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PurpleStainedGlassPaneFromPaneTemplate = createBPRecipe({
    idRecipe: "minecraft:purple_stained_glass_pane_from_pane",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_glass_pane",
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:glass_pane"
            },
            X: {
                item: "minecraft:purple_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:glass_pane"
            },
            {
                item: "minecraft:purple_dye"
            }
        ],
        result: {
            item: "minecraft:purple_stained_glass_pane",
            count: 8
        }
    }
});
