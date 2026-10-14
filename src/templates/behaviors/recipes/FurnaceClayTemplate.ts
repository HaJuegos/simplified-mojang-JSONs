import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceClayTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_clay",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:clay"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:clay",
        output: "minecraft:hardened_clay",
        priority: 440
    }
});
