import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FireChargeCoalTemplate = createBPRecipe({
    idRecipe: "minecraft:FireCharge_coal_sulphur_recipeId",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:blaze_powder"
            },
            {
                item: "minecraft:coal"
            },
            {
                item: "minecraft:gunpowder"
            }
        ],
        result: {
            item: "minecraft:fire_charge",
            count: 3
        }
    }
});
