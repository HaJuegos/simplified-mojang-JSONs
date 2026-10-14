import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeprecatedCobwebToStringTemplate = createBPRecipe({
    idRecipe: "minecraft:cobweb_to_string",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "deprecated"
        ],
        ingredients: [
            {
                item: "minecraft:string"
            }
        ],
        unlock: {
            context: "None"
        },
        result: {
            item: "minecraft:string"
        }
    }
});
