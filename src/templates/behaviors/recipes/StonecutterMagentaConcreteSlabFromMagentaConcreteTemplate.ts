import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterMagentaConcreteSlabFromMagentaConcreteTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_magenta_concrete_slab_from_magenta_concrete",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:magenta_concrete"
            }
        ],
        unlock: [
            {
                item: "minecraft:magenta_concrete"
            }
        ],
        result: {
            item: "minecraft:magenta_concrete_slab",
            count: 2
        }
    }
});
