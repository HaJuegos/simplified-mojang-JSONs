import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const JunglePlanksFromWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:jungle_planks_from_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "planks",
        pattern: [
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:jungle_wood"
            }
        },
        unlock: [
            {
                item: "minecraft:jungle_wood"
            }
        ],
        result: {
            item: "minecraft:jungle_planks",
            count: 4
        }
    }
});
