import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterMossyCobblestoneSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_mossy_cobbledouble_stone_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:mossy_cobblestone"
            }
        ],
        unlock: [
            {
                item: "minecraft:mossy_cobblestone"
            }
        ],
        result: {
            item: "minecraft:mossy_cobblestone_slab",
            count: 2
        }
    }
});
