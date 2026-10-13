import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LightBlueStainedGlassTemplate = createBPRecipe({
    idRecipe: "minecraft:light_blue_stained_glass",
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
                item: "minecraft:light_blue_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:glass"
            }
        ],
        result: {
            item: "minecraft:light_blue_stained_glass",
            count: 8
        }
    }
});
