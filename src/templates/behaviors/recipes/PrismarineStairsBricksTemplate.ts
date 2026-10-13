import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PrismarineStairsBricksTemplate = createBPRecipe({
    idRecipe: "minecraft:prismarine_stairs_bricks",
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
                item: "minecraft:prismarine_bricks"
            }
        },
        unlock: [
            {
                item: "minecraft:prismarine_bricks"
            }
        ],
        result: {
            item: "minecraft:prismarine_bricks_stairs",
            count: 4
        }
    }
});
