import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPolishedGraniteSlab2Template = createBPRecipe({
    idRecipe: "minecraft:stonecutter_polished_granite_slab2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:polished_granite"
            }
        ],
        unlock: [
            {
                item: "minecraft:polished_granite"
            }
        ],
        result: {
            item: "minecraft:polished_granite_slab",
            count: 2
        }
    }
});
