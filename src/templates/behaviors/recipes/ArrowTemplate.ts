import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ArrowTemplate = createBPRecipe({
    idRecipe: "minecraft:arrow",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "#",
            "Y"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:flint"
            },
            Y: {
                item: "minecraft:feather"
            }
        },
        unlock: [
            {
                item: "minecraft:flint"
            },
            {
                item: "minecraft:feather"
            }
        ],
        result: {
            item: "minecraft:arrow",
            count: 4
        }
    }
});
