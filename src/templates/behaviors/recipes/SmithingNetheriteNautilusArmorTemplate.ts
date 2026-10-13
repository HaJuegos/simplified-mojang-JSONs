import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const SmithingNetheriteNautilusArmorTemplate = createBPRecipe({
    idRecipe: "minecraft:smithing_netherite_nautilus_armor",
    typeRecipe: TypeRecipesVanillaEnums.RecipeSmithingTransform,
    smithing: {
        template: "minecraft:netherite_upgrade_smithing_template",
        base: "minecraft:diamond_nautilus_armor",
        addition: "minecraft:netherite_ingot",
        result: "minecraft:netherite_nautilus_armor"
    }
});
