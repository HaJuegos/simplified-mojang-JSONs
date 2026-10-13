import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PaleOakDoorTemplate = createBPRecipe({
    idRecipe: "minecraft:pale_oak_door",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_door",
        pattern: [
            "##",
            "##",
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:pale_oak_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:pale_oak_planks"
            }
        ],
        result: {
            item: "minecraft:pale_oak_door",
            count: 3
        }
    }
});
