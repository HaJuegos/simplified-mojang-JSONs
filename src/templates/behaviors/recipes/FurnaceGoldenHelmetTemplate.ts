import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceGoldenHelmetTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_golden_helmet",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:golden_helmet"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:golden_helmet",
        output: "minecraft:gold_nugget",
        priority: 130
    }
});
