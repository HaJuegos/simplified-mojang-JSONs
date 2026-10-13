import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StonecutterPurpurPillarTemplate = createBPRecipe({
    idRecipe: "minecraft:stonecutter_purpur_lines",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "stonecutter"
        ],
        priority: 0,
        ingredients: [
            {
                item: "minecraft:purpur_block",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:purpur_block",
                data: 0
            }
        ],
        result: {
            item: "minecraft:purpur_pillar",
            count: 1
        }
    }
});
