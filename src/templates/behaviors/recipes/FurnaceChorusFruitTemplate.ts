import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceChorusFruitTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_chorus_fruit",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:chorus_fruit"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:chorus_fruit",
        output: "minecraft:chorus_fruit_popped",
        priority: 220
    }
});
