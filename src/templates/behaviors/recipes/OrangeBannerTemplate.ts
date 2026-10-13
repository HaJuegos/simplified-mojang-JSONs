import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeBannerTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_banner",
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
                item: "minecraft:orange_wool"
            },
            "|": {
                item: "minecraft:stick"
            }
        },
        unlock: [
            {
                item: "minecraft:orange_wool"
            }
        ],
        result: {
            item: "minecraft:banner",
            data: 14
        }
    }
});
