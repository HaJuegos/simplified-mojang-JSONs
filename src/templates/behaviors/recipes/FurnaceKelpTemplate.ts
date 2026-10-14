import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceKelpTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_kelp",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:kelp"
            }
        ],
        targetBlocks: [
            "furnace",
            "smoker",
            "campfire",
            "soul_campfire"
        ],
        input: "minecraft:kelp",
        output: "minecraft:dried_kelp",
        priority: 80
    }
});
