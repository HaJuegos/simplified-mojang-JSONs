import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LanternTemplate = createBPRecipe({
    idRecipe: "minecraft:lantern",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#x#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:iron_nugget"
            },
            x: {
                item: "minecraft:torch"
            }
        },
        unlock: [
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_ingot"
            }
        ],
        result: {
            item: "minecraft:lantern",
            count: 1
        }
    }
});
