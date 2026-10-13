import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewLongswiftnessFermentedSpiderEyeTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_longswiftness_fermented_spider_eye",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:long_swiftness",
        reagent: "minecraft:fermented_spider_eye",
        output: "minecraft:potion_type:long_slowness"
    }
});
