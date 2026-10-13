import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const JungleHangingSignTemplate = createBPRecipe({
    idRecipe: "minecraft:jungle_hanging_sign",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "sign",
        pattern: [
            "| |",
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:stripped_jungle_log"
            },
            "|": {
                item: "minecraft:chain"
            }
        },
        unlock: [
            {
                item: "minecraft:stripped_jungle_log"
            }
        ],
        result: {
            item: "minecraft:jungle_hanging_sign",
            count: 6
        }
    }
});
