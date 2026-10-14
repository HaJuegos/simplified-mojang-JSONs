import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceCherryLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_cherry_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:cherry_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:cherry_leaves",
        output: "minecraft:leaf_litter",
        priority: 240
    }
});
