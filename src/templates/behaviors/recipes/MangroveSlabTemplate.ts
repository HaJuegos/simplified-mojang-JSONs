import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MangroveSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:mangrove_slab",
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
                item: "minecraft:mangrove_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:mangrove_planks"
            }
        ],
        result: {
            item: "minecraft:mangrove_slab",
            count: 6
        }
    }
});
