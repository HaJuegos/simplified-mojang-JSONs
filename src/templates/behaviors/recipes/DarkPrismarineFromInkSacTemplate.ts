import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DarkPrismarineFromInkSacTemplate = createBPRecipe({
    idRecipe: "minecraft:dark_prismarine_from_ink_sac",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        priority: 1,
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
                item: "minecraft:ink_sac"
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
