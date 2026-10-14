import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmithingArmorTrimTemplate = createBPRecipe({
    idRecipe: "minecraft:smithing_armor_trim",
    typeRecipe: TypeRecipesVanillaEnums.RecipeSmithingTrim,
    smithingTrim: {
        template: {
            tag: "minecraft:trim_templates"
        },
        base: {
            tag: "minecraft:trimmable_armors"
        },
        addition: {
            tag: "minecraft:trim_materials"
        }
    }
});