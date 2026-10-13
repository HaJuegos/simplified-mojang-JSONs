import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkPrismarineTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_prismarine",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "SSS",
            "SIS",
            "SSS"
        ],
        key: {
            S: {
                item: "minecraft:prismarine_shard"
            },
            I: {
                item: "minecraft:black_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:prismarine_shard"
            }
        ],
        result: {
            item: "minecraft:dark_prismarine"
        }
    }
});
