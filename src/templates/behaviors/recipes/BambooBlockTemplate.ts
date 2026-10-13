import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wood",
        pattern: [
            "###",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:bamboo"
            }
        },
        unlock: [
            {
                item: "minecraft:bamboo"
            }
        ],
        result: {
            item: "minecraft:bamboo_block",
            count: 1
        }
    }
});
