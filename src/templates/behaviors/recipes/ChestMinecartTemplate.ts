import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ChestMinecartTemplate = createBPRecipe({
    idRecipe: "minecraft:chest_minecart",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:chest"
            },
            {
                item: "minecraft:minecart"
            }
        ],
        unlock: [
            {
                item: "minecraft:minecart"
            }
        ],
        result: {
            item: "minecraft:chest_minecart"
        }
    }
});
