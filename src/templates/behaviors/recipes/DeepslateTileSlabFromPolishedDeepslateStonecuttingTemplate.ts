import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateTileSlabFromPolishedDeepslateStonecuttingTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_tile_slab_from_polished_deepslate_stonecutting",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        ingredients: [
            {
                data: 0,
                item: "minecraft:polished_deepslate"
            }
        ],
        priority: 0,
        result: {
            count: 2,
            data: 0,
            item: "minecraft:deepslate_tile_slab"
        },
        unlock: [
            {
                data: 0,
                item: "minecraft:polished_deepslate"
            }
        ],
        tags: [
            "stonecutter"
        ]
    }
});
