import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewSplashPotionDragonBreathTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_splash_potion_dragon_breath",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingContainer,
    brewingContainer: {
        input: "minecraft:splash_potion",
        reagent: "minecraft:dragon_breath",
        output: "minecraft:lingering_potion"
    }
});
