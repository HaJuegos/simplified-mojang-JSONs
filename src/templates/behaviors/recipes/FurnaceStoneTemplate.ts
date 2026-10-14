import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStoneTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_stone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:stone",
                data: 0
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:stone:0",
        output: "minecraft:smooth_stone",
        priority: 370
    }
});
