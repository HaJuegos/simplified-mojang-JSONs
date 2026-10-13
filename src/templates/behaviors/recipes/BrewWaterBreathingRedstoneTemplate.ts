import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewWaterBreathingRedstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_water_breathing_redstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:water_breathing",
        reagent: "minecraft:redstone",
        output: "minecraft:potion_type:long_water_breathing"
    }
});
