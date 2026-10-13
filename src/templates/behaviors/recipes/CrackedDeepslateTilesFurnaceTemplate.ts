import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrackedDeepslateTilesFurnaceTemplate = createBPRecipe({
    idRecipe: "minecraft:cracked_deepslate_tiles_furnace",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        input: "minecraft:deepslate_tiles",
        output: "minecraft:cracked_deepslate_tiles",
        unlock: [
            {
                item: "minecraft:deepslate_tiles"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 320
    }
});
