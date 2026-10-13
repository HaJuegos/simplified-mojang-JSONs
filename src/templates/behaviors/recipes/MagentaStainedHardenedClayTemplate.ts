import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const MagentaStainedHardenedClayTemplate = createBPRecipe({
    idRecipe: "minecraft:magenta_stained_hardened_clay",
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
                item: "minecraft:magenta_dye"
            }
        },
        unlock: [
            {
                item: "minecraft:hardened_clay"
            }
        ],
        result: {
            item: "minecraft:magenta_terracotta",
            count: 8
        }
    }
});
