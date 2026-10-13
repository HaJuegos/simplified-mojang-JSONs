import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStoneBrickTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_stone_brick",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:stone_bricks"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:stone_bricks",
        output: "minecraft:cracked_stone_bricks",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 350
    }
});
