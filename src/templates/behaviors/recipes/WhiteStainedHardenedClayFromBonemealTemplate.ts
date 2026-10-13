import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WhiteStainedHardenedClayFromBonemealTemplate = createBPRecipe({
    idRecipe: "minecraft:white_stained_hardened_clay_from_bonemeal",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        group: "stained_hardened_clay",
        priority: 1,
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
                item: "minecraft:bone_meal"
            }
        },
        unlock: [
            {
                item: "minecraft:hardened_clay"
            }
        ],
        result: {
            item: "minecraft:white_terracotta",
            count: 8
        }
    }
});
