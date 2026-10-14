import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceJungleWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_jungle_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        targetBlocks: [
            "deprecated"
        ],
        input: "minecraft:wood:3",
        output: "minecraft:coal:1"
    }
});
