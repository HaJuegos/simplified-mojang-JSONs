import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PackedMudTemplate = createBPRecipe({
    idRecipe: "minecraft:packed_mud",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:mud"
            },
            {
                item: "minecraft:wheat"
            }
        ],
        unlock: [
            {
                item: "minecraft:mud"
            }
        ],
        result: {
            item: "minecraft:packed_mud"
        }
    }
});
