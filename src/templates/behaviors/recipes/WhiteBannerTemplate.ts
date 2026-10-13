import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WhiteBannerTemplate = createBPRecipe({
    idRecipe: "minecraft:white_banner",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "banner",
        pattern: [
            "###",
            "###",
            " | "
        ],
        key: {
            "#": {
                item: "minecraft:white_wool"
            },
            "|": {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:white_wool"
            }
        ],
        result: {
            item: "minecraft:banner",
            data: 15
        }
    }
});
