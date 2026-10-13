import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PrismarineWallTemplate = createBPRecipe({
    idRecipe: "minecraft:prismarine_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:prismarine",
                data: 0
            }
        },
        unlock: [
            {
                item: "minecraft:prismarine",
                data: 0
            }
        ],
        result: {
            item: "minecraft:prismarine_wall",
            count: 6
        }
    }
});
