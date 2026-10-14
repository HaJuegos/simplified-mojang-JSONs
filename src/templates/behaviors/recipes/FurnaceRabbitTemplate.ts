import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceRabbitTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_rabbit",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:rabbit"
            }
        ],
        targetBlocks: [
            "furnace",
            "smoker",
            "campfire",
            "soul_campfire"
        ],
        input: "minecraft:rabbit",
        output: "minecraft:cooked_rabbit",
        priority: 70
    }
});
