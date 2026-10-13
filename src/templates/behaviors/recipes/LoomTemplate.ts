import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const LoomTemplate = createBPRecipe({
    idRecipe: "minecraft:loom",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AA",
            "BB"
        ],
        key: {
            A: {
                item: "minecraft:string"
            },
            B: {
                tag: "minecraft:planks"
            }
        },
        unlock: [
            {
                item: "minecraft:string"
            }
        ],
        result: {
            item: "loom"
        },
        priority: -1
    }
});
