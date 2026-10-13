import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateTileStairsFromDeepslateTilesStonecuttingTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_tile_stairs_from_deepslate_tiles_stonecutting",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        ingredients: [
            {
                data: 0,
                item: "minecraft:deepslate_tiles"
            }
        ],
        priority: 0,
        result: {
            count: 1,
            data: 0,
            item: "minecraft:deepslate_tile_stairs"
        },
        unlock: [
            {
                data: 0,
                item: "minecraft:deepslate_tiles"
            }
        ],
        tags: [
            "stonecutter"
        ]
    }
});
