import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const DioriteTemplate = createBPRecipe({
    idRecipe: "minecraft:diorite",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "CQ",
            "QC"
        ],
        key: {
            Q: {
                item: "minecraft:quartz"
            },
            C: {
                item: "minecraft:cobblestone"
            }
        },
        unlock: [
            {
                item: "minecraft:quartz"
            }
        ],
        result: {
            item: "minecraft:diorite",
            count: 2
        }
    }
});
