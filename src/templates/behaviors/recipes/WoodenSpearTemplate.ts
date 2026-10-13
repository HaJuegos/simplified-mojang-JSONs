import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WoodenSpearTemplate = createBPRecipe({
    idRecipe: "minecraft:wooden_spear",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "  X",
            " # ",
            "#  "
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                tag: "minecraft:planks"
            }
        },
        unlock: [
            {
                item: "minecraft:stick"
            }
        ],
        result: {
            item: "minecraft:wooden_spear"
        }
    }
});
