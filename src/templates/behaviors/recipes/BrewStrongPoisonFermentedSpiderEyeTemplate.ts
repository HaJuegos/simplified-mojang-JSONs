import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewStrongPoisonFermentedSpiderEyeTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_strong_poison_fermented_spider_eye",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:strong_poison",
        reagent: "minecraft:fermented_spider_eye",
        output: "minecraft:potion_type:strong_harming"
    }
});
