import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ScaffoldingTemplate = createBPRecipe({
    idRecipe: "minecraft:scaffolding",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "|S|",
            "| |",
            "| |"
        ],
        key: {
            "|": {
                item: "minecraft:bamboo"
            },
            S: {
                item: "minecraft:string"
            }
        },
        unlock: [
            {
                item: "minecraft:bamboo"
            }
        ],
        result: {
            item: "minecraft:scaffolding",
            count: 6
        }
    }
});
