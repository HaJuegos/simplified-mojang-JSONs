import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LecternFromMangroveSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:lectern_from_mangrove_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            " B ",
            " A "
        ],
        key: {
            A: {
                item: "mangrove_slab"
            },
            B: {
                item: "bookshelf"
            }
        },
        result: {
            item: "lectern",
            count: 1
        },
        priority: 2
    }
});
