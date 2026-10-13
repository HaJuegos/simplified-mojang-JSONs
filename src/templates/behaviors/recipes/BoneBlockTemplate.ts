import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BoneBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:bone_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XXX",
            "XXX",
            "XXX"
        ],
        key: {
            X: {
                item: "minecraft:dye",
                data: 15
            }
        },
        unlock: [
            {
                item: "minecraft:dye",
                data: 15
            }
        ],
        result: {
            item: "minecraft:bone_block"
        }
    }
});
