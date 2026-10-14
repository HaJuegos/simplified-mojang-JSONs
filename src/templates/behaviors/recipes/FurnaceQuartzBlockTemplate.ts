import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceQuartzBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_quartz_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:quartz_block",
                data: 0
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:quartz_block:0",
        output: "minecraft:smooth_quartz",
        priority: 390
    }
});
