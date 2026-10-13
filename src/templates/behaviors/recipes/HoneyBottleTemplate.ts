import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const HoneyBottleTemplate = createBPRecipe({
    idRecipe: "minecraft:honey_bottle",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:honey_block"
            },
            {
                item: "minecraft:glass_bottle"
            },
            {
                item: "minecraft:glass_bottle"
            },
            {
                item: "minecraft:glass_bottle"
            },
            {
                item: "minecraft:glass_bottle"
            }
        ],
        unlock: [
            {
                item: "minecraft:honey_block"
            }
        ],
        result: {
            item: "minecraft:honey_bottle",
            count: 4
        }
    }
});
