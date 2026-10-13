import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CyanWoolSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:cyan_wool_slab",
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
                item: "minecraft:cyan_wool"
            }
        },
        unlock: [
            {
                item: "minecraft:cyan_wool"
            }
        ],
        result: {
            item: "minecraft:cyan_wool_slab",
            count: 6
        }
    }
});
