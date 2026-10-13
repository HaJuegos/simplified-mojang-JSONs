import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PinkDyeFromPinkPetalsTemplate = createBPRecipe({
    idRecipe: "minecraft:pink_dye_from_pink_petals",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "pink_dye",
        ingredients: [
            {
                item: "minecraft:pink_petals"
            }
        ],
        unlock: [
            {
                item: "minecraft:pink_petals"
            }
        ],
        result: {
            item: "minecraft:pink_dye"
        }
    }
});
