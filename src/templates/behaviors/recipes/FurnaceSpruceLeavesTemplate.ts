import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceSpruceLeavesTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_spruce_leaves",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:spruce_leaves"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:spruce_leaves",
        output: "minecraft:leaf_litter",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 240
    }
});
