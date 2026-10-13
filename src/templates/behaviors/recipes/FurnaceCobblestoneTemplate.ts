import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceCobblestoneTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_cobblestone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:cobblestone"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:cobblestone",
        output: "minecraft:stone",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 360
    }
});
