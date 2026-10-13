import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrackedDeepslateBricksFurnaceTemplate = createBPRecipe({
    idRecipe: "minecraft:cracked_deepslate_bricks_furnace",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        input: "minecraft:deepslate_bricks",
        output: "minecraft:cracked_deepslate_bricks",
        unlock: [
            {
                item: "minecraft:deepslate_bricks"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 310
    }
});
