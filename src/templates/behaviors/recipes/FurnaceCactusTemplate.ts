import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceCactusTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_cactus",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:cactus"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:cactus",
        output: "minecraft:dye:2",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 200
    }
});
