import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceBirchLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_birch_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:birch_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:birch_leaves",
        output: "minecraft:leaf_litter",
        priority: 240
    }
});
