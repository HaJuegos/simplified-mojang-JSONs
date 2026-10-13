import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PurpurSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:purpur_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:purpur_pillar"
            }
        },
        unlock: [
            {
                item: "minecraft:purpur_pillar"
            }
        ],
        result: {
            item: "minecraft:purpur_slab",
            count: 6
        }
    }
});
