import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceGoldenSwordTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_golden_sword",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:golden_sword"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:golden_sword",
        output: "minecraft:gold_nugget",
        priority: 130
    }
});
