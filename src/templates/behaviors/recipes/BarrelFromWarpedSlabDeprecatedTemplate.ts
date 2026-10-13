import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BarrelFromWarpedSlabDeprecatedTemplate = createBPRecipe({
    idRecipe: "minecraft:barrel_from_warped_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        // TODO: [0] El valor 'deprecated' no existe en el tipado (validos: crafting_table, stonecutter).
        tags: [
            "deprecated"
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
                item: "warped_slab"
            }
        },
        result: {
            item: "minecraft:barrel",
            count: 1
        },
        priority: 2
    }
});
