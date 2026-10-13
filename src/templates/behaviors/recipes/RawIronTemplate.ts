import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RawIronTemplate = createBPRecipe({
    idRecipe: "minecraft:raw_iron",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:raw_iron_block"
            }
        },
        unlock: [
            {
                item: "minecraft:raw_iron_block"
            }
        ],
        result: {
            item: "minecraft:raw_iron",
            count: 9
        }
    }
});
