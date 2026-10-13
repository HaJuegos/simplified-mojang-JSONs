import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const ConduitTemplate = createBPRecipe({
    idRecipe: "minecraft:conduit",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:nautilus_shell"
            },
            X: {
                item: "minecraft:heart_of_the_sea"
            }
        },
        unlock: [
            {
                item: "minecraft:nautilus_shell"
            },
            {
                item: "minecraft:heart_of_the_sea"
            }
        ],
        result: {
            item: "minecraft:conduit"
        }
    }
});
