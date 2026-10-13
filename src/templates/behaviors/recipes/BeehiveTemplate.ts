import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BeehiveTemplate = createBPRecipe({
    idRecipe: "minecraft:beehive",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "ooo",
            "###"
        ],
        key: {
            "#": {
                tag: "minecraft:planks"
            },
            o: {
                item: "minecraft:honeycomb"
            }
        },
        unlock: [
            {
                item: "minecraft:honeycomb"
            }
        ],
        // TODO: Se esperaba un texto y llego una lista.
        result: [
            {
                item: "minecraft:beehive"
            }
        ],
        priority: -1
    }
});
