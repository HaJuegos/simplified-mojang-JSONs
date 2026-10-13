import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LocatorMapTemplate = createBPRecipe({
    idRecipe: "minecraft:locator_map",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:paper"
            },
            X: {
                item: "minecraft:compass"
            }
        },
        unlock: [
            {
                item: "minecraft:compass"
            }
        ],
        result: {
            item: "minecraft:emptymap",
            data: 2
        }
    }
});
