import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TntTemplate = createBPRecipe({
    idRecipe: "minecraft:tnt",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X#X",
            "#X#",
            "X#X"
        ],
        key: {
            "#": {
                item: "minecraft:sand"
            },
            X: {
                item: "minecraft:gunpowder"
            }
        },
        unlock: [
            {
                item: "minecraft:gunpowder"
            }
        ],
        result: {
            item: "minecraft:tnt"
        }
    }
});
