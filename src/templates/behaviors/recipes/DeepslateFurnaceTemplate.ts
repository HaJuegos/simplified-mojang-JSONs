import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateFurnaceTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_furnace",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        input: "minecraft:cobbled_deepslate",
        output: "minecraft:deepslate",
        unlock: [
            {
                data: 0,
                item: "minecraft:cobbled_deepslate"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        priority: 430
    }
});
