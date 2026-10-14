import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceMuttonRawTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_mutton_raw",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:muttonRaw"
            }
        ],
        targetBlocks: [
            "furnace",
            "smoker",
            "campfire",
            "soul_campfire"
        ],
        input: "minecraft:muttonRaw",
        output: "minecraft:muttonCooked",
        priority: 0
    }
});
