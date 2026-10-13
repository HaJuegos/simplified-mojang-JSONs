import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BoltArmorTrimSmithingTemplateDuplicateWaxedTemplate = createBPRecipe({
    idRecipe: "minecraft:bolt_armor_trim_smithing_template_duplicate_waxed",
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
                item: "minecraft:bolt_armor_trim_smithing_template"
            },
            "#": {
                item: "minecraft:diamond"
            },
            C: {
                item: "minecraft:waxed_copper"
            }
        },
        unlock: [
            {
                item: "minecraft:bolt_armor_trim_smithing_template"
            }
        ],
        result: {
            item: "minecraft:bolt_armor_trim_smithing_template",
            count: 2
        }
    }
});
