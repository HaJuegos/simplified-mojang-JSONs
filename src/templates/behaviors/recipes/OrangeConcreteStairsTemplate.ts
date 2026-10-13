import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeConcreteStairsTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_concrete_stairs",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "##",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:orange_concrete"
            }
        },
        unlock: [
            {
                item: "minecraft:orange_concrete"
            }
        ],
        result: {
            item: "minecraft:orange_concrete_stairs",
            count: 4
        }
    }
});
