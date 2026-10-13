import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RedWoolSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:red_wool_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:red_wool"
            }
        },
        unlock: [
            {
                item: "minecraft:red_wool"
            }
        ],
        result: {
            item: "minecraft:red_wool_slab",
            count: 6
        }
    }
});
