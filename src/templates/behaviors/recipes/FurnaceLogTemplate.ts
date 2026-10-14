import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceLogTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                tag: "minecraft:logs_that_burn"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: {
            tag: "minecraft:logs_that_burn"
        },
        output: "minecraft:coal:1",
        priority: 90
    }
});
