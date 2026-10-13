import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GrindstoneFromMangrovePlanksTemplate = createBPRecipe({
    idRecipe: "minecraft:grindstone_from_mangrove_planks",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "|_|",
            "# #"
        ],
        key: {
            "|": {
                item: "minecraft:stick"
            },
            "#": {
                item: "minecraft:mangrove_planks"
            },
            _: {
                item: "minecraft:normal_stone_slab"
            }
        },
        result: {
            item: "minecraft:grindstone"
        },
        priority: 2
    }
});
