import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceResinBrickTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_resin_brick",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:resin_clump"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:resin_clump",
        output: "minecraft:resin_brick",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 190
    }
});
