import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RecoveryCompassFromLodestoneCompassTemplate = createBPRecipe({
    idRecipe: "minecraft:recovery_compass_from_lodestone_compass",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "SSS",
            "SCS",
            "SSS"
        ],
        key: {
            S: {
                item: "minecraft:echo_shard"
            },
            C: {
                item: "minecraft:lodestone_compass"
            }
        },
        unlock: [
            {
                item: "minecraft:echo_shard"
            }
        ],
        result: {
            item: "minecraft:recovery_compass",
            count: 1
        },
        priority: 1
    }
});
