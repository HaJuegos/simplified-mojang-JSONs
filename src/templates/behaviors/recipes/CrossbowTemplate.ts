import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrossbowTemplate = createBPRecipe({
    idRecipe: "minecraft:crossbow",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#I#",
            "STS",
            " # "
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            S: {
                item: "minecraft:string"
            },
            I: {
                item: "minecraft:iron_ingot"
            },
            T: {
                item: "minecraft:tripwire_hook"
            }
        },
        unlock: [
            {
                item: "minecraft:tripwire_hook"
            },
            {
                item: "minecraft:string"
            },
            {
                item: "minecraft:iron_ingot"
            }
        ],
        result: {
            item: "minecraft:crossbow"
        }
    }
});
