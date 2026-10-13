import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BarrelFromCrimsonSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:barrel_from_crimson_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "ABA",
            "A A",
            "ABA"
        ],
        key: {
            A: {
                item: "minecraft:stick"
            },
            B: {
                item: "crimson_slab"
            }
        },
        result: {
            item: "minecraft:barrel",
            count: 1
        },
        priority: 2
    }
});
