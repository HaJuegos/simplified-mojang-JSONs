import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnacePaleOakLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_pale_oak_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:pale_oak_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:pale_oak_leaves",
        output: "minecraft:leaf_litter",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 240
    }
});
