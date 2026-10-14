import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceCrackedPolishedBlackstoneBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_cracked_polished_blackstone_bricks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:polished_blackstone_bricks"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:polished_blackstone_bricks",
        output: "minecraft:cracked_polished_blackstone_bricks",
        priority: 340
    }
});
