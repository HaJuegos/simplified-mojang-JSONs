import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BarrelFromMangroveSlabDeprecatedTemplate = createBPRecipe({
    idRecipe: "minecraft:barrel_from_mangrove_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
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
                item: "mangrove_slab"
            }
        },
        result: {
            item: "minecraft:barrel",
            count: 1
        },
        priority: 2
    }
});
