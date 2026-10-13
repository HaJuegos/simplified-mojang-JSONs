import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceSmoothBasaltTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_smooth_basalt",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:basalt"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:basalt",
        output: "minecraft:smooth_basalt",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 380
    }
});
