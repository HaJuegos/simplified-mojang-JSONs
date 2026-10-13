import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceClayBallTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_clay_ball",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:clay_ball"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:clay_ball",
        output: "minecraft:brick",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 160
    }
});
