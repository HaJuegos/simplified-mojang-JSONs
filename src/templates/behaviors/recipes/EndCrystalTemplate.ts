import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const EndCrystalTemplate = createBPRecipe({
    idRecipe: "minecraft:end_crystal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "GGG",
            "GEG",
            "GTG"
        ],
        key: {
            T: {
                item: "minecraft:ghast_tear"
            },
            E: {
                item: "minecraft:ender_eye"
            },
            G: {
                item: "minecraft:glass"
            }
        },
        unlock: [
            {
                item: "minecraft:ender_eye"
            }
        ],
        result: {
            item: "minecraft:end_crystal"
        }
    }
});
