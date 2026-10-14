import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceRedSandTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_red_sand",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:red_sand"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:red_sand",
        output: "minecraft:glass",
        priority: 300
    }
});
