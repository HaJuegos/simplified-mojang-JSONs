import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TntMinecartTemplate = createBPRecipe({
    idRecipe: "minecraft:tnt_minecart",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:tnt",
                data: 0
            },
            {
                item: "minecraft:minecart"
            }
        ],
        unlock: [
            {
                item: "minecraft:tnt",
                data: 0
            }
        ],
        result: {
            item: "minecraft:tnt_minecart"
        }
    }
});
