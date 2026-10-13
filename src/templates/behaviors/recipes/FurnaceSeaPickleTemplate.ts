import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceSeaPickleTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_sea_pickle",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:sea_pickle"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:sea_pickle",
        output: "minecraft:dye:10",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 210
    }
});
