import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrownDyeFromCocoaBeansTemplate = createBPRecipe({
    idRecipe: "minecraft:brown_dye_from_cocoa_beans",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "brown_dye",
        ingredients: [
            {
                item: "minecraft:dye",
                data: 3
            }
        ],
        unlock: [
            {
                item: "minecraft:dye",
                data: 3
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 17
        }
    }
});
