import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CrimsonPressurePlateTemplate = createBPRecipe({
    idRecipe: "minecraft:crimson_pressure_plate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "wooden_pressure_plate",
        pattern: [
            "##"
        ],
        key: {
            "#": {
                item: "minecraft:crimson_planks"
            }
        },
        unlock: [
            {
                item: "minecraft:crimson_planks"
            }
        ],
        result: {
            item: "minecraft:crimson_pressure_plate",
            count: 1
        }
    }
});
