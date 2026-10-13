import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BeetrootSoupTemplate = createBPRecipe({
    idRecipe: "minecraft:beetroot_soup",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:bowl"
            },
            {
                item: "minecraft:beetroot",
                count: 6
            }
        ],
        unlock: [
            {
                item: "minecraft:beetroot"
            }
        ],
        result: {
            item: "minecraft:beetroot_soup"
        }
    }
});
