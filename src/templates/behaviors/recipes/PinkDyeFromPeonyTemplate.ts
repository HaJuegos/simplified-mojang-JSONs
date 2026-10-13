import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PinkDyeFromPeonyTemplate = createBPRecipe({
    idRecipe: "minecraft:pink_dye_from_peony",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "pink_dye",
        ingredients: [
            {
                item: "minecraft:peony"
            }
        ],
        unlock: [
            {
                item: "minecraft:peony"
            }
        ],
        result: {
            item: "minecraft:pink_dye",
            count: 2
        }
    }
});
