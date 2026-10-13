import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrafterTemplate = createBPRecipe({
    idRecipe: "minecraft:crafter",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#C#",
            "RDR"
        ],
        key: {
            R: {
                item: "minecraft:redstone"
            },
            "#": {
                item: "minecraft:iron_ingot"
            },
            D: {
                item: "minecraft:dropper"
            },
            C: {
                item: "minecraft:crafting_table"
            }
        },
        unlock: [
            {
                item: "minecraft:dropper"
            }
        ],
        result: {
            item: "minecraft:crafter"
        }
    }
});
