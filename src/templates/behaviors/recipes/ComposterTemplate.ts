import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ComposterTemplate = createBPRecipe({
    idRecipe: "minecraft:composter",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "# #",
            "# #",
            "###"
        ],
        key: {
            "#": {
                tag: "minecraft:wooden_slabs"
            }
        },
        unlock: [
            {
                tag: "minecraft:wooden_slabs"
            }
        ],
        result: {
            item: "minecraft:composter"
        },
        priority: -1
    }
});
