import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const HopperMinecartTemplate = createBPRecipe({
    idRecipe: "minecraft:hopper_minecart",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:hopper"
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
            item: "minecraft:hopper_minecart"
        }
    }
});
