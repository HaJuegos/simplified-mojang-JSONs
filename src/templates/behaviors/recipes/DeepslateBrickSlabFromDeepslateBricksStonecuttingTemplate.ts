import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateBrickSlabFromDeepslateBricksStonecuttingTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_brick_slab_from_deepslate_bricks_stonecutting",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        ingredients: [
            {
                data: 0,
                item: "minecraft:deepslate_bricks"
            }
        ],
        priority: 0,
        result: {
            count: 2,
            data: 0,
            item: "minecraft:deepslate_brick_slab"
        },
        unlock: [
            {
                data: 0,
                item: "minecraft:deepslate_bricks"
            }
        ],
        tags: [
            "stonecutter"
        ]
    }
});
