import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NetheriteIngotTemplate = createBPRecipe({
    idRecipe: "minecraft:netherite_ingot",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:netherite_scrap",
                count: 4
            },
            {
                item: "minecraft:gold_ingot",
                count: 4
            }
        ],
        unlock: [
            {
                item: "minecraft:netherite_scrap"
            }
        ],
        result: {
            item: "minecraft:netherite_ingot",
            data: 0,
            count: 1
        }
    }
});
