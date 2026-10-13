import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StoneShovelFromCobbledDeepslateTemplate = createBPRecipe({
    idRecipe: "minecraft:stone_shovel_from_cobbled_deepslate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                item: "minecraft:cobbled_deepslate"
            }
        },
        result: {
            item: "minecraft:stone_shovel"
        },
        priority: 2
    }
});
