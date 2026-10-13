import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooMosiacStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_mosaic_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_stairs",
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:bamboo_mosaic"
            }
        },
        unlock: [
            {
                item: "minecraft:bamboo_mosaic"
            }
        ],
        result: {
            item: "minecraft:bamboo_mosaic_stairs",
            count: 4
        }
    }
});
