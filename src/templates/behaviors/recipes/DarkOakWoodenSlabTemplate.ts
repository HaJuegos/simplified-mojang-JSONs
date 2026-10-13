import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkOakWoodenSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_oak_wooden_slab",
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
                item: "minecraft:dark_oak_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:dark_oak_planks"
            }
        ],
        result: {
            item: "minecraft:dark_oak_slab",
            count: 6
        }
    }
});
