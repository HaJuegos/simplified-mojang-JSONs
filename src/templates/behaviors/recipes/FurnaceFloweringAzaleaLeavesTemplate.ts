import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceFloweringAzaleaLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_flowering_azalea_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:azalea_leaves_flowered"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:azalea_leaves_flowered",
        output: "minecraft:leaf_litter",
        priority: 240
    }
});
