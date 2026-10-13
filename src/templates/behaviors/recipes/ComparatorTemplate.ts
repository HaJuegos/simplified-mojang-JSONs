import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ComparatorTemplate = createBPRecipe({
    idRecipe: "minecraft:comparator",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " # ",
            "#X#",
            "III"
        ],
        key: {
            "#": {
                item: "minecraft:redstone_torch"
            },
            X: {
                item: "minecraft:quartz"
            },
            I: {
                item: "minecraft:stone",
                data: 0
            }
        },
        unlock: [
            {
                item: "minecraft:quartz"
            }
        ],
        result: {
            item: "minecraft:comparator"
        }
    }
});
