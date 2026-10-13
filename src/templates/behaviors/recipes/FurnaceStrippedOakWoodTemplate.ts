import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStrippedOakWoodTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_stripped_oak_wood",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        // TODO: [0] El valor 'deprecated' no existe en el tipado (validos: furnace, blast_furnace, campfire, soul_campfire, smoker).
        targetBlocks: [
            "deprecated"
        ],
        input: "minecraft:wood:8",
        output: "minecraft:coal:1"
    }
});
