import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ArmorStandTemplate = createBPRecipe({
    idRecipe: "minecraft:armor_stand",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "///",
            " / ",
            "/_/"
        ],
        key: {
            "/": {
                item: "minecraft:stick"
            },
            _: {
                item: "minecraft:smooth_stone_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:smooth_stone_slab"
            }
        ],
        result: {
            item: "minecraft:armor_stand"
        }
    }
});
