import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay15Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay15",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:black_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:black_terracotta",
        output: "minecraft:black_glazed_terracotta",
        priority: 520
    }
});
