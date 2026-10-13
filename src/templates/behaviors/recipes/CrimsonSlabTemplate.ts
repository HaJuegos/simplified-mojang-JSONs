import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrimsonSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:crimson_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_slab",
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:crimson_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:crimson_planks"
            }
        ],
        result: {
            item: "minecraft:crimson_slab",
            count: 6
        }
    }
});
