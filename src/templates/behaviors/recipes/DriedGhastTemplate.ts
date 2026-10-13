import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DriedGhastTemplate = createBPRecipe({
    idRecipe: "minecraft:dried_ghast",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "TTT",
            "T#T",
            "TTT"
        ],
        key: {
            T: {
                item: "minecraft:ghast_tear"
            },
            "#": {
                item: "minecraft:soul_sand"
            }
        },
        unlock: [
            {
                item: "minecraft:ghast_tear"
            }
        ],
        result: {
            item: "minecraft:dried_ghast",
            count: 1
        }
    }
});
