import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SuspiciousStewFromAlliumTemplate = createBPRecipe({
    idRecipe: "minecraft:suspicious_stew_from_allium",
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
                item: "minecraft:allium"
            }
        ],
        // TODO: El formato de 'unlock' como objeto ('context') no existe en el tipado; solo se admite una lista de items { item, data? }.
        unlock: {
            context: "None"
        },
        result: {
            item: "minecraft:suspicious_stew",
            data: 7
        }
    }
});
