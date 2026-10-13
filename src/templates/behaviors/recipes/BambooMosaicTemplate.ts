import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooMosaicTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_mosaic",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:bamboo_slab"
            }
        },
        unlock: [
            {
                item: "minecraft:bamboo_slab"
            }
        ],
        result: {
            item: "minecraft:bamboo_mosaic",
            count: 1
        }
    }
});
