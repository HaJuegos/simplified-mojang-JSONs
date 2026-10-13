import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DeepslateBrickWallTemplate = createBPRecipe({
    idRecipe: "minecraft:deepslate_brick_wall",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        key: {
            "#": {
                item: "minecraft:deepslate_bricks"
            }
        },
        pattern: [
            "###",
            "###"
        ],
        priority: 1,
        result: {
            count: 6,
            item: "minecraft:deepslate_brick_wall"
        },
        unlock: [
            {
                item: "minecraft:deepslate_bricks"
            }
        ],
        tags: [
            "crafting_table"
        ]
    }
});
