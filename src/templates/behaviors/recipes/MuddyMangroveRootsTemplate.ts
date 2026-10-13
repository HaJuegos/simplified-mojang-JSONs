import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MuddyMangroveRootsTemplate = createBPRecipe({
    idRecipe: "minecraft:muddy_mangrove_roots",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:mangrove_roots"
            },
            {
                item: "minecraft:mud"
            }
        ],
        unlock: [
            {
                item: "minecraft:mangrove_roots"
            }
        ],
        result: {
            item: "minecraft:muddy_mangrove_roots"
        }
    }
});
