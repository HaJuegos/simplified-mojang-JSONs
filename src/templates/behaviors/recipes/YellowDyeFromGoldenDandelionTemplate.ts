import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const YellowDyeFromGoldenDandelionTemplate = createBPRecipe({
    idRecipe: "minecraft:yellow_dye_from_golden_dandelion",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "yellow_dye",
        ingredients: [
            {
                item: "minecraft:golden_dandelion",
                data: 0
            }
        ],
        unlock: [
            {
                item: "minecraft:golden_dandelion",
                data: 0
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 11
        }
    }
});
