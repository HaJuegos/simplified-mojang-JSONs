import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ShieldTemplate = createBPRecipe({
    idRecipe: "minecraft:shield",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#I#",
            "###",
            " # "
        ],
        key: {
            "#": {
                tag: "minecraft:planks"
            },
            I: {
                item: "minecraft:iron_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:iron_ingot"
            }
        ],
        result: {
            item: "minecraft:shield"
        },
        priority: -1
    }
});
