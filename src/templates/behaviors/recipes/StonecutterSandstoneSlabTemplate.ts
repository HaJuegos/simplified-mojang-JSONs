import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterSandstoneSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_sanddouble_stone_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 2,
        ingredients: [
            {
                item: "minecraft:sandstone",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:sandstone",
                data: 0
            }
        ],
        result: {
            item: "minecraft:sandstone_slab",
            count: 2
        }
    }
});
