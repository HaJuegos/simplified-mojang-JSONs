import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceChickenTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_chicken",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:chicken"
            }
        ],
        targetBlocks: [
            "furnace",
            "smoker",
            "campfire",
            "soul_campfire"
        ],
        input: "minecraft:chicken",
        output: "minecraft:cooked_chicken",
        priority: 50
    }
});
