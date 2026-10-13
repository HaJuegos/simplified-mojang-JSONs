import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MangroveChestBoatTemplate = createBPRecipe({
    idRecipe: "minecraft:mangrove_chest_boat",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:chest"
            },
            {
                item: "minecraft:boat",
                data: 6
            }
        ],
        unlock: [
            {
                item: "minecraft:boat",
                data: 6
            }
        ],
        result: {
            item: "minecraft:chest_boat",
            data: 6
        }
    }
});
