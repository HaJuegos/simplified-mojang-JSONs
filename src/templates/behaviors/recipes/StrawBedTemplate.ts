import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StrawBedTemplate = createBPRecipe({
    idRecipe: "minecraft:straw_bed",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:hay_block"
            }
        },
        unlock: [
            {
                item: "minecraft:hay_block"
            },
            {
                item: "minecraft:straw_bed"
            }
        ],
        result: {
            item: "minecraft:straw_bed",
            count: 4
        }
    }
});
