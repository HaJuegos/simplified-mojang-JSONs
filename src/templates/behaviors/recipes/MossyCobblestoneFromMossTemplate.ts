import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MossyCobblestoneFromMossTemplate = createBPRecipe({
    idRecipe: "minecraft:mossy_cobblestone_from_moss",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:moss_block"
            }
        ],
        unlock: [
            {
                item: "minecraft:moss_block"
            }
        ],
        result: {
            item: "minecraft:mossy_cobblestone"
        }
    }
});
