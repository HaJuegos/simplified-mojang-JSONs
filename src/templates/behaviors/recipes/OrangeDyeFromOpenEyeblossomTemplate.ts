import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeDyeFromOpenEyeblossomTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_dye_from_open_eyeblossom",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "orange_dye",
        ingredients: [
            {
                item: "minecraft:open_eyeblossom"
            }
        ],
        unlock: [
            {
                item: "minecraft:open_eyeblossom"
            }
        ],
        result: {
            item: "minecraft:orange_dye"
        }
    }
});
