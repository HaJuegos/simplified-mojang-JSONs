import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceSandstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_sandstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:sandstone",
                data: 0
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        // TODO: Se esperaba un texto y llego un objeto.
        input: {
            item: "minecraft:sandstone",
            data: 0
        },
        output: "minecraft:smooth_sandstone",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 410
    }
});
