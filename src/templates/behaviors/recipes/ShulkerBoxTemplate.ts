import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ShulkerBoxTemplate = createBPRecipe({
    idRecipe: "minecraft:shulker_box",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "-",
            "#",
            "-"
        ],
        key: {
            "#": {
                item: "minecraft:chest"
            },
            "-": {
                item: "minecraft:shulker_shell"
            }
        },
        unlock: [
            {
                item: "minecraft:shulker_shell"
            }
        ],
        result: {
            item: "minecraft:undyed_shulker_box"
        }
    }
});
