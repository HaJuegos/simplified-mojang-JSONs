import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BarrelWithTagDeprecatedTemplate = createBPRecipe({
    idRecipe: "minecraft:barrel_with_tag",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "deprecated"
        ],
        pattern: [
            "#-#",
            "# #",
            "#-#"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            "-": {
                tag: "minecraft:wooden_slabs"
            }
        },
        result: {
            item: "minecraft:barrel"
        },
        priority: -1
    }
});
