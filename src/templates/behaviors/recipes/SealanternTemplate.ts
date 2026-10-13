import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SealanternTemplate = createBPRecipe({
    idRecipe: "minecraft:sealantern",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "SCS",
            "CCC",
            "SCS"
        ],
        key: {
            S: {
                item: "minecraft:prismarine_shard"
            },
            C: {
                item: "minecraft:prismarine_crystals"
            }
        },
        unlock: [
            {
                item: "minecraft:prismarine_crystals"
            }
        ],
        result: {
            item: "minecraft:sealantern"
        }
    }
});
