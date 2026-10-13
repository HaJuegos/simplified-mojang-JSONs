import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceAzaleaLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_azalea_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:azalea_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:azalea_leaves",
        output: "minecraft:leaf_litter",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 240
    }
});
