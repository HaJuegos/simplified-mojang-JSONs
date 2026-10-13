import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NoteblockFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:noteblock_from_mangrove_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "ABA",
            "AAA"
        ],
        key: {
            A: {
                item: "mangrove_planks"
            },
            B: {
                item: "redstone"
            }
        },
        result: {
            item: "noteblock",
            count: 1
        },
        priority: 2
    }
});
