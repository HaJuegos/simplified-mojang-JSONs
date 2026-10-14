import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnacePorkchopTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_porkchop",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:porkchop"
            }
        ],
        targetBlocks: [
            "furnace",
            "smoker",
            "campfire",
            "soul_campfire"
        ],
        input: "minecraft:porkchop",
        output: "minecraft:cooked_porkchop",
        priority: 10
    }
});
