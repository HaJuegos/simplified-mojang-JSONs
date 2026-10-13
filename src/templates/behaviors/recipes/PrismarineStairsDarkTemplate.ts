import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PrismarineStairsDarkTemplate = createBPRecipe({
    idRecipe: "minecraft:prismarine_stairs_dark",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#  ",
            "## ",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:dark_prismarine"
            }
        },
        unlock: [
            {
                item: "minecraft:dark_prismarine"
            }
        ],
        result: {
            item: "minecraft:dark_prismarine_stairs",
            count: 4
        }
    }
});
