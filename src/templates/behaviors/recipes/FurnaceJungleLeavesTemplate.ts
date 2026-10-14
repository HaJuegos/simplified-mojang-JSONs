import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceJungleLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_jungle_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:jungle_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:jungle_leaves",
        output: "minecraft:leaf_litter",
        priority: 240
    }
});
