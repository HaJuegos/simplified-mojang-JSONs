import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StoneSpearTemplate = createBPRecipe({
    idRecipe: "minecraft:stone_spear",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "  X",
            " # ",
            "#  "
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                tag: "minecraft:stone_tool_materials"
            }
        },
        unlock: [
            {
                tag: "minecraft:stone_tool_materials"
            }
        ],
        result: {
            item: "minecraft:stone_spear"
        },
        priority: -1
    }
});
