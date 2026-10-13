import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterDarkPrismarineSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_dark_prismarine_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:dark_prismarine"
            }
        ],
        unlock: [
            {
                item: "minecraft:dark_prismarine"
            }
        ],
        result: {
            item: "minecraft:dark_prismarine_slab",
            count: 2
        }
    }
});
