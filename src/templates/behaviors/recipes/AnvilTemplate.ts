import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const AnvilTemplate = createBPRecipe({
    idRecipe: "minecraft:anvil",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "III",
            " i ",
            "iii"
        ],
        key: {
            I: {
                item: "minecraft:iron_block"
            },
            i: {
                item: "minecraft:iron_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:iron_block"
            }
        ],
        result: {
            item: "minecraft:anvil",
            data: 0
        }
    }
});
