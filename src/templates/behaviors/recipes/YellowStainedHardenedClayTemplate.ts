import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const YellowStainedHardenedClayTemplate = createBPRecipe({
    idRecipe: "minecraft:yellow_stained_hardened_clay",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_hardened_clay",
        pattern: [
            "###",
            "#X#",
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:hardened_clay"
            },
            X: {
                item: "minecraft:yellow_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:hardened_clay"
            }
        ],
        result: {
            item: "minecraft:yellow_terracotta",
            count: 8
        }
    }
});
