import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewingStandFromBlackstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:brewing_stand_from_blackstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " B ",
            "###"
        ],
        key: {
            B: {
                item: "minecraft:blaze_rod"
            },
            "#": {
                item: "minecraft:blackstone"
            }
        },
        result: {
            item: "minecraft:brewing_stand"
        },
        priority: 2
    }
});
