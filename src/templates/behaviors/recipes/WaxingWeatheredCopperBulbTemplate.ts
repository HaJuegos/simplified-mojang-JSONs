import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WaxingWeatheredCopperBulbTemplate = createBPRecipe({
    idRecipe: "minecraft:waxing_weathered_copper_bulb",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:weathered_copper_bulb"
            },
            {
                item: "minecraft:honeycomb"
            }
        ],
        unlock: [
            {
                item: "minecraft:weathered_copper_bulb"
            }
        ],
        result: {
            item: "minecraft:waxed_weathered_copper_bulb",
            count: 1
        },
        priority: 1
    }
});
