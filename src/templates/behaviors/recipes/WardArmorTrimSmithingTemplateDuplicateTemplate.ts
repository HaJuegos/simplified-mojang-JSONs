import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WardArmorTrimSmithingTemplateDuplicateTemplate = createBPRecipe({
    idRecipe: "minecraft:ward_armor_trim_smithing_template_duplicate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#S#",
            "#C#",
            "###"
        ],
        key: {
            S: {
                item: "minecraft:ward_armor_trim_smithing_template"
            },
            "#": {
                item: "minecraft:diamond"
            },
            C: {
                item: "minecraft:cobbled_deepslate"
            }
        },
        unlock: [
            {
                item: "minecraft:ward_armor_trim_smithing_template"
            }
        ],
        result: {
            item: "minecraft:ward_armor_trim_smithing_template",
            count: 2
        }
    }
});
