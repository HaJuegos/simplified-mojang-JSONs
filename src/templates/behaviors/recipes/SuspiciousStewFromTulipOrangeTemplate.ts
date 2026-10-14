import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SuspiciousStewFromTulipOrangeTemplate = createBPRecipe({
    idRecipe: "minecraft:suspicious_stew_from_tulip_orange",
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
                item: "minecraft:orange_tulip"
            }
        ],
        unlock: {
            context: "None"
        },
        result: {
            item: "minecraft:suspicious_stew",
            data: 2
        }
    }
});
