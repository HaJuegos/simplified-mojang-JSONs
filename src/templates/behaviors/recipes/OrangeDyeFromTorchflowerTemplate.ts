import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const OrangeDyeFromTorchflowerTemplate = createBPRecipe({
    idRecipe: "minecraft:orange_dye_from_torchflower",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "orange_dye",
        ingredients: [
            {
                item: "minecraft:torchflower"
            }
        ],
        unlock: [
            {
                item: "minecraft:torchflower"
            }
        ],
        result: {
            item: "minecraft:dye",
            data: 14
        }
    }
});
