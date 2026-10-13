import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlueWoolSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:blue_wool_slab",
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
                item: "minecraft:blue_wool"
            }
        },
        unlock: [
            {
                item: "minecraft:blue_wool"
            }
        ],
        result: {
            item: "minecraft:blue_wool_slab",
            count: 6
        }
    }
});
