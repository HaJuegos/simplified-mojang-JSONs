import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PaleMossCarpetTemplate = createBPRecipe({
    idRecipe: "minecraft:pale_moss_carpet",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "carpet",
        pattern: [
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:pale_moss_block"
            }
        },
        result: {
            item: "minecraft:pale_moss_carpet",
            count: 3
        },
        unlock: [
            {
                item: "minecraft:pale_moss_block"
            }
        ]
    }
});
