import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WaxingOxidizedCopperBlockTemplate = createBPRecipe({
    idRecipe: "minecraft:waxing_oxidized_copper",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:oxidized_copper"
            },
            {
                item: "minecraft:honeycomb"
            }
        ],
        unlock: [
            {
                item: "minecraft:oxidized_copper"
            }
        ],
        result: {
            item: "minecraft:waxed_oxidized_copper",
            count: 1
        },
        priority: 1
    }
});
