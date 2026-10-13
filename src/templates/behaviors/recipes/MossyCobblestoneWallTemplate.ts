import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MossyCobblestoneWallTemplate = createBPRecipe({
    idRecipe: "minecraft:mossy_cobblestone_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:mossy_cobblestone"
            }
        },
        unlock: [
            {
                item: "minecraft:mossy_cobblestone"
            }
        ],
        result: {
            item: "minecraft:mossy_cobblestone_wall",
            count: 6
        }
    }
});
