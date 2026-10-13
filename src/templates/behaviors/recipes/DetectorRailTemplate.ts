import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DetectorRailTemplate = createBPRecipe({
    idRecipe: "minecraft:detector_rail",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X X",
            "X#X",
            "XRX"
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:stone_pressure_plate"
            },
            X: {
                item: "minecraft:iron_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:rail"
            }
        ],
        result: {
            item: "minecraft:detector_rail",
            count: 6
        }
    }
});
