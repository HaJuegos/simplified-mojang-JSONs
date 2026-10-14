import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SuspiciousStewFromBlueOrchidTemplate = createBPRecipe({
    idRecipe: "minecraft:suspicious_stew_from_blue_orchid",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                tag: "minecraft:mushrooms_for_stew"
            },
            {
                tag: "minecraft:mushrooms_for_stew"
            },
            {
                item: "minecraft:bowl"
            },
            {
                item: "minecraft:blue_orchid"
            }
        ],
        unlock: {
            context: "None"
        },
        result: {
            item: "minecraft:suspicious_stew",
            data: 6
        }
    }
});
