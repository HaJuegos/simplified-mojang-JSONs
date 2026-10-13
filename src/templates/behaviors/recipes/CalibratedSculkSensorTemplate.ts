import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CalibratedSculkSensorTemplate = createBPRecipe({
    idRecipe: "minecraft:calibrated_sculk_sensor",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " X ",
            "X#X"
        ],
        key: {
            X: {
                item: "minecraft:amethyst_shard"
            },
            "#": {
                item: "minecraft:sculk_sensor"
            }
        },
        unlock: [
            {
                item: "minecraft:amethyst_shard"
            }
        ],
        result: {
            item: "minecraft:calibrated_sculk_sensor",
            count: 1
        }
    }
});
