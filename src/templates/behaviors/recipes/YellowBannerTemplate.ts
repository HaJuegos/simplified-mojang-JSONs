import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const YellowBannerTemplate = createBPRecipe({
    idRecipe: "minecraft:yellow_banner",
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
                item: "minecraft:yellow_wool"
            },
            "|": {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:yellow_wool"
            }
        ],
        result: {
            item: "minecraft:banner",
            data: 11
        }
    }
});
