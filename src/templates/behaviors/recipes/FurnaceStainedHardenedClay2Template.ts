import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay2Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay2",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:magenta_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:magenta_terracotta",
        output: "minecraft:magenta_glazed_terracotta",
        priority: 530
    }
});
