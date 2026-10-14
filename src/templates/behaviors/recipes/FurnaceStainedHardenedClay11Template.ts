import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay11Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay11",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:blue_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:blue_terracotta",
        output: "minecraft:blue_glazed_terracotta",
        priority: 480
    }
});
