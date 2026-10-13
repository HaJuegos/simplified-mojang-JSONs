import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PolishedDeepslateFromCobbledDeepslateStonecuttingTemplate = createBPRecipe({
    idRecipe: "minecraft:polished_deepslate_from_cobbled_deepslate_stonecutting",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        ingredients: [
            {
                data: 0,
                item: "minecraft:cobbled_deepslate"
            }
        ],
        unlock: [
            {
                item: "minecraft:cobbled_deepslate"
            }
        ],
        priority: 0,
        result: {
            count: 1,
            data: 0,
            item: "minecraft:polished_deepslate"
        },
        tags: [
            "stonecutter"
        ]
    }
});
