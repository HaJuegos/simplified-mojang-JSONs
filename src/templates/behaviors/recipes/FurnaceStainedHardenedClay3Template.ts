import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay3Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay3",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:light_blue_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:light_blue_terracotta",
        output: "minecraft:light_blue_glazed_terracotta",
        priority: 540
    }
});
