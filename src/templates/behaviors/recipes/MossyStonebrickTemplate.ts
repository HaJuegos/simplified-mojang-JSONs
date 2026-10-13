import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MossyStonebrickTemplate = createBPRecipe({
    idRecipe: "minecraft:mossy_stonebrick",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:stone_bricks"
            },
            {
                item: "minecraft:vine"
            }
        ],
        unlock: [
            {
                item: "minecraft:vine"
            }
        ],
        result: {
            item: "minecraft:mossy_stone_bricks"
        }
    }
});
