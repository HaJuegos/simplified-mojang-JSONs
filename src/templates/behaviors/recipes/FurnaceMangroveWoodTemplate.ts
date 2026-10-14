import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceMangroveWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_mangrove_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:mangrove_wood"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:mangrove_wood",
        output: "minecraft:coal:1",
        priority: 90
    }
});
