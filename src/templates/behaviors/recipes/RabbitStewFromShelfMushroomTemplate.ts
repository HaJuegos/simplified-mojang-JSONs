import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RabbitStewFromShelfMushroomTemplate = createBPRecipe({
    idRecipe: "minecraft:rabbit_stew_from_shelf_mushroom",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "rabbit_stew",
        ingredients: [
            {
                item: "minecraft:bowl"
            },
            {
                item: "minecraft:baked_potato"
            },
            {
                item: "minecraft:carrot"
            },
            {
                item: "minecraft:shelf_mushroom"
            },
            {
                item: "minecraft:cooked_rabbit"
            }
        ],
        unlock: [
            {
                item: "minecraft:cooked_rabbit"
            }
        ],
        result: {
            item: "minecraft:rabbit_stew"
        }
    }
});
