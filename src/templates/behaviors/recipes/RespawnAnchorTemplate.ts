import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const RespawnAnchorTemplate = createBPRecipe({
    idRecipe: "minecraft:respawn_anchor",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "OOO",
            "GGG",
            "OOO"
        ],
        key: {
            O: {
                item: "minecraft:crying_obsidian"
            },
            G: {
                item: "minecraft:glowstone"
            }
        },
        unlock: [
            {
                item: "minecraft:crying_obsidian"
            }
        ],
        result: {
            item: "minecraft:respawn_anchor",
            count: 1
        }
    }
});
