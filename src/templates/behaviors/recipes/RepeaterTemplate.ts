import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RepeaterTemplate = createBPRecipe({
    idRecipe: "minecraft:repeater",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#X#",
            "III"
        ],
        key: {
            "#": {
                item: "minecraft:redstone_torch"
            },
            X: {
                item: "minecraft:redstone"
            },
            I: {
                item: "minecraft:stone",
                data: 0
            }
        },
        unlock: [
            {
                item: "minecraft:redstone_torch"
            }
        ],
        result: {
            item: "minecraft:repeater"
        }
    }
});
