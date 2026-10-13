import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GoldenDandelionTemplate = createBPRecipe({
    idRecipe: "minecraft:golden_dandelion",
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
                item: "minecraft:gold_nugget"
            },
            X: {
                item: "minecraft:dandelion"
            }
        },
        unlock: [
            {
                item: "minecraft:gold_nugget"
            },
            {
                item: "minecraft:dandelion"
            }
        ],
        result: {
            item: "minecraft:golden_dandelion",
            count: 1
        }
    }
});
